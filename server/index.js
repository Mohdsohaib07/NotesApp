import express from 'express';
import dbConnect from './db/dbconnect.js';
import 'dotenv/config';
import { router } from './routes/userRoutes.js';
import {noteRouter} from './routes/notesRoutes.js'
import cors from 'cors';
const app = express();
// middleware to parse json data
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

//user Routes
app.use(router);
//notes routes
app.use(noteRouter);


app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
    //connecting to the database
    dbConnect();
}
);