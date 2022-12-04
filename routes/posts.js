import express from 'express'
import { } from '../controllers/post.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router()

// Create new post
router.get('/', verifyToken)

export default router;