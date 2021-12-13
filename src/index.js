const express = require("express");

const app = express();

app.use(express.json());

const Upload = require("./middleware/fileuploads");

const UserController = require("./controllers/users.controller");

app.use("/users",UserController);

const {register,login} = require("./controllers/auth.contoller");

app.post("/register",Upload.single("Profile_Photo"),register);

app.post("/login",login);

module.exports = app;