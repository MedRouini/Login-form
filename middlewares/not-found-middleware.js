

const notFoundMiddleware = (req,res,next)=>{
    res.status(404).send('Route Doesnt Exist')
}

module.exports = notFoundMiddleware;