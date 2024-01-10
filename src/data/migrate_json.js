import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import Question from '../models/question.js'
import fs from 'fs'

export async function migrate() {
  console.log('-- Migrate start --')

  const jsonFile = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../data/dialog_set.json'
  )
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))

  for (const [key, item] of Object.entries(data)) {
    const _id = new mongoose.Types.ObjectId()

    const newData = {
      _id: _id,
      question: key,
      questionKeyWord: item.question,
      answer: item.answer,
    }

    if (key === '') {
      // in case of bot can't answer :3
      continue
    }

    // console.log(newData)

    // this line is for insert data to mongodb
    // await Question.create(newData)
  }
}
