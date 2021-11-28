const express = require('express')
require('dotenv').config()
const cors = require('cors')

const connectDB = require('./models/connectDB')

const confRouter = require('./routes/conference.routes')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', confRouter)
app.use('/', (req, res) => {
	res.send('Hello')
})

const port = process.env.PORT || 3001
connectDB()
app.listen(port, () => console.log(`listening on port ${port}`))

// you wanted to say something! go back to the mongodb brwoser