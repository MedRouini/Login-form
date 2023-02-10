const CustomAPIError = require('../errors/custom-api-error');
const {StatusCodes} = require('http-status-codes');

let msg='';
const errorHandlerMiddleware = (err,req,res,next)=>{
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})

    }
    //Duplicate Error
    if(err.code && err.code===11000){
        msg = `${Object.keys(err.keyValue)} already used, please use another ${Object.keys(err.keyValue)}`
        return res.status(StatusCodes.BAD_REQUEST).json({msg})

    }
    
    if(err.name === 'ValidationError'){
        //iterate through all values in err.errors,get all error messages and join them with ","
        msg = Object.values(err.errors).map(item=>item.message).join(',')
        console.log(Object.values(err.errors))
        return res.status(StatusCodes.BAD_REQUEST).json({msg})
 
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:'Something went wrong ',err})
   
}


module.exports = errorHandlerMiddleware;