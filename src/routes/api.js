import express from 'express'
import { healthCheck, helloWorld } from '../controllers/health.js'
import {
  getAllQuestion,
  getAnswerFromQuestion,
} from '../controllers/question.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router()

// GET
router.get('/', verifyToken, helloWorld)
router.get('/health', verifyToken, healthCheck)

router.get('/question', getAllQuestion)
router.post('/question', getAnswerFromQuestion)

export default router
