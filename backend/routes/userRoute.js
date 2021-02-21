import express from 'express';

const router = express.Router();

import { authUser, createNewUser, getUserProfile } from '../controllers/userController.js';
import { protect } from "../middleware/authMiddleware.js";
router.post('/', createNewUser)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)

export default router
