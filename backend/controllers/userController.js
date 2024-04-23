import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import {userModel as User} from "../model/userModel.js"

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

const registerUser = asyncHandler(async (req, res) => {
    const {name, username, password} = req.body
    console.log("body: ", req.body)
    if(!name || !username || !password) {
        res.status(400)
        throw new Error ('Please enter all required fields to proceed')
    }

    const userExists = await User.findOne({username})
    if(userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        username,
        password: hashedPassword
    })

    if(user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error ('Unable to create user')
    }
})

const loginUser = asyncHandler(async(req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            token: generateToken(user._id)
        }) 
    }else {
            res.status(400)
            throw new Error('Invalid Credentials')
    }
})

const getUser = asyncHandler (async (req, res) => {
    res.status(200).json(req.user)
})

export {
    registerUser, 
    loginUser,
    getUser
}