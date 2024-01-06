async function fetchAnswerFromDatabase(question) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Answer to: ${question}`)
    }, 1000)
  })
}

// GET
export const getNpcAnswer = async (req, res) => {
  try {
    const answer = await fetchAnswerFromDatabase(req.body.question)
    res.status(200).json(answer)
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}

export const getNpcAnswerQuestion = async (req, res) => {
  try {
    const answer = await fetchAnswerFromDatabase(req.param.question)
    res.status(200).json(answer)
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}
