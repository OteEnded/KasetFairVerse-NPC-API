import Question from '../models/question.js'
import { getCloseMatches } from 'difflib'

export async function get_all_question() {
  const data = await Question.find()
  return data
}

export async function get_answer(message) {
  const questions = await get_all_question()
  for (const question of questions) {
    const questionKeyWord = question.questionKeyWord
    const answer = question.answer
    const ratio = getCloseMatches(message, questionKeyWord, 1, 0.7)
    if (ratio.length > 0) {
      return answer
    }
  }
}
