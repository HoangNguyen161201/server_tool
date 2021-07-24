import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './Routers/index.js';
import connectDB from './app/config/connectDb.js';
import fileUpdate from 'express-fileupload';
import path from 'path';
const app = express();
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(fileUpdate());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true, limit:'30mb'}));
app.use(cors());
Router(app);


app.listen(process.env.PORT || 4000,()=>{
    console.log('http://localhost:4000');
})

