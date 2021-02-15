const express = require("express"); // Server
const bodyParser = require("body-parser"); // Allows JSON Body from POST Request to be Accessed
const exphbs = require("express-handlebars"); // Templating Engine Handlebars

/////////////////////////////////////////////// /* Configure Server */ //////////////////////////////////////////////////////////
const app = express(); // Initalize Express Server

let PORT = process.env.PORT || 9080; // Set Default Port for Express and Heroku
app.use(bodyParser.urlencoded({ extended: false })); // Middlehardbody-parser for Express to add functionality
app.use(express.static("public")); // Serve Static Content Such as CSS, JS, for the App from the "public" Directory in the Application Directory.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
// require("./controllers/burgersController.js")(app);

// routes for the location to be accessed
const routes = require("./controllers/burgersController.js");
app.use("/", routes);


/////////////////////////////////////////////// /* Start The Server */ //////////////////////////////////////////////////////////
// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
