const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require("cors");

const usersRoutes = require("./routes/getdetails_routes");

// const routes =require('./routes/usersRoutes');
app.use(cors());
app.get("/", (req, res) => {
  console.log("apis working..");
  res.status(200).json({
    success: 1,
    message: "apis working..",
  });
});

app.use("/", usersRoutes);

const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log(`Express Server is running at port ${port}`);
});
