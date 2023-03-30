

  const middleware = (req,res,next) => {
    const Token = req.headers.token
    if(Token){
        next()
    }else{
        res.send("Token Not Found")
    }

  }
  

  module.exports = middleware