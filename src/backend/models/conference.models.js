const mongoose = require('mongoose')

const conferenceSchema = new mongoose.Schema(
	{
		confName: { type: String, required: true },
		url: { type: String, required: true },
		location: { type: String, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		cpfUrl: { type: String, required: true },
		cpfEndDate: { type: Date, required: true },
		confTwitterHandle: { type: String, required: true },
		codeOfConduct: { type: String, required: true },
	},
	{ timestamps: true }
)

const Conference = mongoose.model('Conference', conferenceSchema)

module.exports = Conference
