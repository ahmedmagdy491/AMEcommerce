import jwt from "jsonwebtoken";
const secret = `${process.env.JWT_SECRET}`
const generateToken = (id)=>{
    return jwt.sign({id}, secret, {
        expiresIn: '30d'
    })
}

export default generateToken
