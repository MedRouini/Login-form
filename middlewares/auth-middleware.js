const UnauthorizationError = require('../errors/unauthorized-error')
const jwt= require('jsonwebtoken')

const authMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthorizationError('Invalid Authentification')
    }
    const token = authHeader.split(' ')[1];
    try{
        payload = jwt.verify(token,process.env.JWT_SECRET)

        req.user = {name:payload.name,userID:payload.userID}
        next()
    
    }catch(error){
        throw new UnauthorizationError('Invalid Authentification')

    }
}

module.exports = authMiddleware