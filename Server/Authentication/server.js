require('dotenv').config()

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const routes = require("./Routes/UserRoutes");
const UserModel = require("./Model/UserModel");
// const { PassportAuth } = require("./Auth/auth");
const DB_URI = "mongodb://127.0.0.1:27017/AuthDB";
const cors = require("cors");
const cookieParser = require('cookie-parser')

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Authentication API",
			version: "1.0.0",
			description: "All Auth API of Muzix App",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// MongoDB Store
const store = new MongoDBStore({
    uri: DB_URI,
    collection: "app_sessions"
});

// Express Session
app.use(session({
    secret: "This is my secret key.",
    saveUninitialized: false,
    cookie:{
        maxAge: 60000,
        secure: true
    },
    resave: false,
    store: store
}));

// Connect to mongoose
mongoose.connect(DB_URI);
mongoose.connection.once("open", (err)=>{
    if(!err){
        console.log("Connected to MongoDB");
    }
});

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done){
    done(null, user._id)
});

passport.deserializeUser(function (id, done){
    UserModel.findById(id, function (err, user){
        done(err, user);
    });
});

// passport.use(PassportAuth());



app.use("/api", routes);

let port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log("Server is listening at port", port);
})