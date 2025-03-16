import express from 'express';
import dbConnect from './db/dbconnect.js';
import 'dotenv/config';
import { router } from './routes/userRoutes.js';
import {noteRouter} from './routes/notesRoutes.js'
import cors from 'cors';
const app = express();
// middleware to parse json data
app.use(express.json());
app.use(cors(
    {
        origin: '*', // Allow requests from your frontend domain
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
));
const PORT = process.env.PORT || 8080;
 //connecting to the database
 dbConnect();
//user Routes
app.use(router);
//notes routes
app.use(noteRouter);
//sample welcome
app.get('/welcome',(req,res)=>{
   return res.status(200).send('welcome to our notes server');
});

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);

}
);