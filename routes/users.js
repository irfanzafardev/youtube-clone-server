import express from 'express'
import { testing } from '../controllers/user.js';

const router = express.Router()

router.get("/testing", testing)

export default router;