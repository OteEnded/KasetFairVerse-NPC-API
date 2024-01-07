import mongoose from "mongoose"

const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    questionKeyWord: {
      type: Array,
      default: [],
      require: true,
    },
    answer: {
      type: Array,
      default: [],
      return: true,
    },
  },
  { timestamps: true },
)

const Question = mongoose.model("Question", questionSchema)

export default Question
