// const express = require('express');
// const http = require('http');
// const bodyParser = require('body-parser');
// const  resRoutes = require('./routes/getdetails_routes');

// const app = express();
// const port = process.env.PORT|| 3000;

// app.use(bodyParser.json({ }));
// //app.use(cookieParser());
// //app.use(express.static(path.join(__dirname, 'public')));

// app.use(function (req, res, next) {
//     //Enabling CORS
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
//     next();
//   });

// app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json());
// app.use('/', resRoutes);

// // app.get("/",(req,res) =>{
// //     res.sendFile(__dirname +"/index.html");
// // })


// var server = http.createServer(app);
// server.listen(port,() => {
//     console.log(`Express Server is running at port ${port}`);

// });




const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');

const usersRoutes =require('./routes/getdetails_routes');


// const routes =require('./routes/usersRoutes');
app.use(cors());
app.get("/", (req, res) => {
    console.log("apis working..");
    res.status(200).json({
      success: 1,
      message: "apis working.."
    });
  });

app.use('/',usersRoutes);

const server = http.createServer(app);

const port = 3000;

server.listen(port, () =>{
    console.log(`Express Server is running at port ${port}`);
});

