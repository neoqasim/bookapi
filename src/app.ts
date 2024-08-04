import express from 'express'
const app = express()




app.get("/", (req, res) => {
    res.json({ name: "qasim" })
})

export default app