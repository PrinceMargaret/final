const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Connect to MongoDB
mongoose.connect('mongodb+srv://PrinceMargaret:whZqC2szDBhh5hGu@prince-cluster.pocnu.mongodb.net/LikedSong?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (err) => {
    console.log(err);
}
);

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Liked Songs API",
			version: "1.0.0",
			description: "All Liked Songs API of Muzix App",
		},
		servers: [
			{
				url: "http://localhost:7000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));



app.use(bodyParser.json());
app.use(cors());
app.use("/api", require('./routes/likedSongRoutes'));

let port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);