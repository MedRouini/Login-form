const {StatusCodes} = require('http-status-codes')
const User = require('../models/userAuth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const BadRequestError = require('../errors/bad-request')
const UnauthorizationError = require('../errors/unauthorized-error')



const login = async (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        throw new BadRequestError('please provide both email and passsword')
    }

    const user = await User.findOne({email})
    if(!user){
        throw new UnauthorizationError('Please provide valid Credentials')
    }
    const isPassword = await bcrypt.compare(password,user.password)

    if(!isPassword){
        throw new UnauthorizationError('Please provide valid Credentials')
    }

    const token = jwt.sign({name:user.name, userID: user._id},process.env.JWT_SECRET,{
        expiresIn:'15d'})

    res.status(StatusCodes.OK).json({name:user.name,token})

    


}


const register = async (req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide value for name,email and password'})       
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)
    



    const user = await User.create({name,email,password:hashedPassword})
    const token = jwt.sign({name:user.name, userID: user._id},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    return res.status(StatusCodes.CREATED).json({name:user.name, token})

    
}

const helloName = (req,res)=>{
    res.status(200).json({text:`hello ${req.user.name}`})
}
module.exports = {login,register,helloName}