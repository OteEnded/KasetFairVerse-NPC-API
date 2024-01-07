export const healthCheck = (req, res) => {
  return res.status(200).json({
    message: "200 ok",
  })
}

export const helloWorld = (req, res) => {
  return res.status(200).send("Hello, World!")
}
