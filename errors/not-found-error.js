const CustomAPIError = require("./custom-api-error");
const {StatusCodes}=require('http-status-codes')

class NotFoundError extends CustomAPIError{
    constructor(meessage){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFoundError;