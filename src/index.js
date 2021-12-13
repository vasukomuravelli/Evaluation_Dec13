const express = require("express");

const app = express();

app.use(express.json());

const Upload = require("./middleware/fileuploads");

const UserController = require("./controllers/users.controller");
const MovieController = require("./controllers/movies.controller");
const ScreenController = require("./controllers/screens.controller");
const SeatsController = require("./controllers/seats.controller");
const TheatreController = require("./controllers/theatre.controller");
const ShowController = require("./controllers/shows.controller");

app.use("/users",UserController);
app.use("/movies",MovieController);
app.use("/screens",ScreenController);
app.use("/seats",SeatsController);
app.use("/shows",ShowController);
app.use("/theatres",TheatreController);

const {register,login} = require("./controllers/auth.contoller");

app.post("/register",Upload.single("Profile_Photo"),register);

app.post("/login",login);

module.exports = app;