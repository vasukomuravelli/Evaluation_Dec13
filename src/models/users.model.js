const {Schema,model} = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    Name : {type:String,required:true},
    Email : {type:String,required:true},
    Password : {type:String,required:true},
    Profile_Photo : {type:String,required:true},
    Roles : [{type:String,required:true}],
},{
    versionKey:false,
    timestamps:true,
});

// userSchema.pre("save",function(next){
//     console.log(this.password);
//     if(! this.isModified("password")) return next();
//     bcrypt.hash(this.password,10, (err, hash)=> {
//         this.password = hash;
//         return next();
//     });
// });

userSchema.pre('save', function (next) {
    if (!this.isModified("Password")) return next();
    bcrypt.hash(this.Password, 10, (err, hash) => {
        this.Password = hash;
        return next();
    })
})


userSchema.methods.checkPassword = function(password){
    return new Promise((resolve,reject)=>{
        bcrypt.compare( password, this.Password, function(err, same){
            console.log(this,password);
            if(err) return reject(err);
            return resolve(same);
        });
    });
}

module.exports = new model("user",userSchema);