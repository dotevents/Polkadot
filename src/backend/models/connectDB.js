const mongoose = require('mongoose')

const connectDB = () => {
	mongoose.connect(process.env.MONGO_DB_URI, err => {
		if (err) throw err
		console.log(`connected to DB`)
	})
}

module.exports = connectDB
