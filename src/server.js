const connect = require("./configs/db");

const app = require("./index");

app.listen("2345",async()=>{
    await connect();
    console.log("Listening on port 2345");
})