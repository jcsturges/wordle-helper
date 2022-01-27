const serverless = require('serverless-http')
const express = require('express')
const app = express()

const WORDS = require('./data/words_len_5.json')

/*eslint no-unused-vars: ["error", {"args": "after-used"}]*/

app.use(express.static('public'))

app.get('/status', (req, res,) => res.sendStatus(200))

app.get('/search', (req, res,) => {
	const { start, end, contains } = req.query

	const words = WORDS.filter(value => {
		const matchStart = start ? value.startsWith(start) : true
		const matchContains = contains ? value.includes(contains) : true
		const matchEnd = end ? value.endsWith(end) : true

		return matchStart && matchContains && matchEnd
	})

	res.status(200).json({ words, count: words.length })
})

app.use((req, res,) => res.sendStatus(404))

module.exports.app = app
module.exports.handler = serverless(app)
