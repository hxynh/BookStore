import express from "express";
import { registerUser, loginUser, getUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router()

router.get('/', protect, getUser)
router.post('/login', loginUser)
router.post('/register', registerUser)

export { router }