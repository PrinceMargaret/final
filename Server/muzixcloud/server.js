import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import swaggerUI  from "swagger-ui-express";
import swaggerJsDoc  from "swagger-jsdoc";

import SongRoutes from './routes/SongRoutes.js';
const app=express();

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Muzix API",
			version: "1.0.0",
			description: "All Muzix API of Muzix App",
		},
		servers: [
			{
				url: "http://localhost:9000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());
app.use(bodyParser.json());
app.use("/api",SongRoutes);




let port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('server is running on port 8000');
}
);

