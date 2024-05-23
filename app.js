import express from 'express';
import mongoose from 'mongoose';
import router from './routes/product-routes.js'; // Note the added .js extension
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())
app.use("/api", router);
mongoose.connect("mongodb+srv://itssanathsb:mongodbsecure@cluster0.siik8wa.mongodb.net/EcomWebApp?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(5000))
    .then(() => console.log('connected to mongodb and listening on port 5000'))
    .catch((err) => console.log(err));

