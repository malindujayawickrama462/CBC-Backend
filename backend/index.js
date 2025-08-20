import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
 

let app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://malindu:123@cluster0.zp3ipbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to the database")
}).catch(()=>{
    console.log("connection failed")
})

app.use("/products",productRouter)
app.use("/users",userRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000');
});