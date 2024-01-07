import Question from "../models/question.js"

// GET
export const getAllQuestion = async (req, res) => {
  try {
    const question = await Question.find()
    res.status(200).json(question)
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}
