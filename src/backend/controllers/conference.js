const Conference = require('../models/conference.models')

const getConf = async (req, res) => {
	const confs = await Conference.find({})
	res.json(confs)
}

const addconference = async (req, res) => {
	try {
		const {
			confName,
			url,
			location,
			startDate,
			endDate,
			cpfUrl,
			cpfEndDate,
			confTwitterHandle,
			codeOfConduct,
		} = req.body

		const newConference = await new Conference({
			confName,
			url,
			location,
			startDate,
			endDate,
			cpfUrl,
			cpfEndDate,
			confTwitterHandle,
			codeOfConduct,
		})

		await newConference.save()
		res.json(newConference)
	} catch (err) {
		return res.status(500).json({ err: err.message })
		
	}
}

module.exports = { addconference, getConf }

// start the server. not path bro you are merging in src folder. yeah start it.