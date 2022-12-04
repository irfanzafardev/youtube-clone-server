import express from 'express'
import { deleteUserController, dislikePost, getUserController, likePost, subscribeUserController, unsubscribeUserController, updateUserController } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router()

// Get user account
router.get('/find/:userId', getUserController)

// Update user account
router.put('/:userId', verifyToken, updateUserController)

// Delete user account
router.delete('/:userId', verifyToken, deleteUserController)

// Subscribe user account
router.put('/subscribe/:userId', verifyToken, subscribeUserController)

// Unsubsribe user account
router.put('/unsubscribe/:userId', verifyToken, unsubscribeUserController)

// Like post
router.put('/like/:postId', verifyToken, likePost)

// Disike post
router.put('/dislike/:postId', verifyToken, dislikePost)

export default router;