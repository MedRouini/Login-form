const mongoose = require ('mongoose')
const {isEmail} = require('validator');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"],
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        validate:{
            validator: function(value){
                return isEmail(value)
            },
            message: props=>`${props.value} is not a valid email`
        },
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please Provide an Email'],
        minLength:8,
    }
})




module.exports = mongoose.model('Login-Form',userSchema)