const express = require("express");
const { engine } = require("express-handlebars");
const { get } = require("http");
const morgan = require("morgan");
const path = require("path");
const route = require("./router");
const db = require("./config/db");
const methodOverRide = require("method-override");

const app = express();
const port = 3000;
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(morgan("combined"));
app.use(express.urlencoded());
app.use(
  methodOverRide(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resource", "views"));

route(app);

db.connect();
app.listen(3000);
