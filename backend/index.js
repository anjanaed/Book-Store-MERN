import express from "express";
import {PORT, mongodbURL} from "./config.js";
import mongoose from 'mongoose'
import {Book} from './models/bookmodel.js'
import bookRoute from './routes/bookRoutes.js';
import cors from 'cors'

const app=express();

app.use(express.json());

app.use(cors());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN Huttooo!');
})

app.use('/books',bookRoute);




mongoose
    .connect(mongodbURL)
    .then(()=>{
        console.log('App connected to DB');
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });


    })
    .catch((error)=>{
        console.log(error);
    })
