import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js"

const protect = asyncHandler ( async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //getting token from header
            token = req.headers.authorization.split(' ')[1]
            //verifying token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //get user using token
            req.user = await User.findById(decoded.id).select('-password') //exclude password
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('Not Authorized - no token')
        }
    }
})

export {protect}