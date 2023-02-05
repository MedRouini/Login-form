const mongoose = require('mongoose')

const connectDB = (uri)=>{
    mongoose.set('strictQuery',true)
    return mongoose.connect(uri,{
        //specify whether to use the new URL string parser
        useNewUrlParser:true,
        // //Create index for all models
        // useCreateIndex:true,
        // //use findOneAndUpdate instead of findAndModify
        // useFindAndModify:false,
        //specify whether to use the new server discovery and monitoring engine
        useUnifiedTopology:true,
    })

}

module.exports = connectDB;