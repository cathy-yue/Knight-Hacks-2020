//Required External Modules
const express = require("express");
const path = require("path");

//App Variables
const app = express();
const port = process.env.PORT || "8000";

//Routes Definitions
app.get("/", (req, res) => {
 res.status(200).send("Journal");
});


// Server Activation
app.listen(port, () => {
 console.log(`Listening to requests on http://localhost:${port}`);
});

// App config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");