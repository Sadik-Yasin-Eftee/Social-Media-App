import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

// app.use('/posts' , postRoutes); //creates a page localhost:5000/posts
//this app.use is to be used after cors which is line15

app.use(bodyParser.json({ limit: "30mb" , extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true }));
app.use(cors()); 

app.use('/posts' , postRoutes); //creates a page localhost:5000/posts

const CONNECTION_URL = 'mongodb+srv://Sadik41:Yasin1660Eftee@cluster0.wkoc5.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true }) //using those use parts to avoid errors in terminal
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify' , false);