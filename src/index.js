import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { dialog } from './data/dialog.js'
import Question from './models/question.js'
import apiRoutes from './routes/api.js'
import { migrate } from './data/migrate_json.js'

// Configuration
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

dotenv.config()

app.use(express.json())
app.use(helmet()) // Security for HTTP headers
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })) //
app.use(morgan('common')) // Request log
app.use(bodyParser.json({ extended: true })) // Parsing request(json)
app.use(bodyParser.urlencoded({ extended: true })) // Parsing request(url)
app.use(cors()) // Cross-Origin Resource Sharing

// Routes
app.use('/', apiRoutes)

// Mongoose setup
const PORT = process.env.PORT || 8081
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    // // Add data [MOCK]
    // Question.insertMany(dialog)

    // migrate()
    //   .then(() => console.log('-- Migrate done --'))
    //   .catch((e) => console.log(e))
  })
  .catch((e) => console.log(`${e} did not connect`))
