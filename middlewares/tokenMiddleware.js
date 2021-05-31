const jwt = require('jsonwebtoken')
const joi = require('joi')

const tokenMiddleware = {
    verifyToken : async (req, res, next) => {
        const token = req.headers.authorization;
        const schema = joi.object({
            authorization: joi.string()
          })
          .options({ abortEarly: false })
      
          const validate = await schema.validate({ authorization: token })
        //   console.log(token);
        //   console.log(validate);
      
          if(validate.error) {
            res.send({
              status: 500,
              message: 'missing token',
              data: validate.error.details
            })
          }

        const decodedToken = await jwt.verify(token, 'secret_key')
        req.body.decodedToken = decodedToken;

        next()



    }
}

module.exports = tokenMiddleware;