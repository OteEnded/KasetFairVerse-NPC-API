import Question from '../models/question.js'
import { get_all_question, get_answer } from '../services/index.js'

// Get all question
export const getAllQuestion = async (req, res) => {
  try {
    const data = await get_all_question()
    return res.status(200).json({ error: false, questions: data })
  } catch (e) {
    return res.status(404).json({ error: true, message: e.message })
  }
}

// Get answer from question
export const getAnswerFromQuestion = async (req, res) => {
  try {
    const question = req.body.question
    const data = await get_answer(question)

    if (!data) {
      return res
        .status(200)
        .json({ error: true, message: 'ไม่สามารถตอบคำถามได้' })
    }
    return res.status(200).json({
      error: false,
      answers: data,
    })
  } catch (e) {
    res.status(404).json({ error: true, message: e.message })
  }
}
