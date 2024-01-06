import express from "express"
import { healthCheck, helloWorld } from "../controllers/health.js"

const router = express.Router()

// GET
router.get("/", helloWorld)
router.get("/health", healthCheck)

router.get("/npc/answer")
router.get("/npc/answer/:question")

export default router
