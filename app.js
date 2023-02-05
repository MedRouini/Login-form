require('dotenv').config()
require('express-async-errors')
const { json } = require('body-parser');
const express = require('express')
const app = express();
const connectDB = require ('./db/connect')

//Importing the error handler middleware
const errorHandlerMiddleware = require('./middlewares/error-handler')


//Routers
const authRouter = require('./routes/auth');

app.use(express.json())



app.use('/api/v1/auth',authRouter);

app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000
const start = async ()=>{
    try{    
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
        console.log(`server listening on port ${port}`)})

    }catch(error){
        console.log(error)

    }
}
start()

