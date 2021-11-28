import { useEffect, useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Pagination } from 'react-instantsearch-dom'
import axios from 'axios'

const SearchConf = () => {
	const [confs, setConfs] = useState([{}])
	// get all conferences
	useEffect(() => {
		axios
			.get('/confs')
			.then(res => {
				if (res.ok) {
					return res.json()
				}
			})
			.then(jsonRes => setConfs(jsonRes))
	})

	const searchClient = algoliasearch(
		process.env.ALGOLIA_APP_ID,
		process.env.ALGOLIA_ADMIN_API_KEY
	)

	const index = searchClient.initIndex('CONFERENCES')

	// send indexed objects to Algolia
	const newConf = {
		topic: '',
		conferenceName: '',
		url: '',
		location: '',
		startDate: '',
		endDate: '',
		cpfUrl: '',
		cpfEndDate: '',
		confTwitterHandle: '',
		codeOfConductUrl: '',
	}

	// save
	index
		.saveObjects([newConf])
		.wait()
		.then(response => <div></div>)

	// search
	index.search('').then(search => {
		;<div>
			<h2>{search}</h2>
		</div>
	})

	return (
		<InstantSearch>
			{/* SearchBox Here */}
			<SearchBox
				translations={{
					placeholder: 'Search Conferences',
				}}
			/>

			{/* You can show the conferences here... */}
			{confs.map((conf, index) => (
				<div key={index}>
					<h2>{conf.conferenceName}</h2>
				</div>
			))}

			{/* Hits... */}
			{/* <Hits hitComponent={Hit} /> */}

			{/* Add Pagination */}
			<Pagination />
		</InstantSearch>
	)
}

export default SearchConf
