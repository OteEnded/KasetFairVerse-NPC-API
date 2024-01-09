import Question from '../models/question.js'
import { getCloseMatches } from 'difflib'

export async function get_all_question() {
  const data = await Question.find()
  const questions = data.map((item) => item.question)
  return questions
}

export async function find_closest_question(message) {
  const questions = await get_all_question()
  console.log(questions)
  const closest_question = getCloseMatches(message, questions, 1, 0.7)
  console.log(closest_question)
  return closest_question
}
