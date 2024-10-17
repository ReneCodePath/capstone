import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3000
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())


// Routes
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
})


// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})