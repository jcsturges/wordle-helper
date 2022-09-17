const serverless = require('serverless-http')
const express = require('express')
const app = express()

const WORDS = require('./data/words_len_5.json')

/*eslint no-unused-vars: ["error", {"args": "after-used"}]*/

app.use(express.static('public'))

app.get('/status', (req, res,) => res.sendStatus(200))

app.get('/search', (req, res,) => {
	const { start, end, excludes, contains } = req.query

	const words = WORDS.filter(value => {
		const word = value.toLowerCase()

		const matchStart = start ? word.startsWith(start.toLowerCase()) : true
		const matchContains = contains ? word.toLowerCase().includes(contains.toLowerCase()) : true
		const matchExcludes = excludes ? !wordContains(word.toLowerCase(), excludes.toLowerCase().split('')) : true
		const matchEnd = end ? word.endsWith(end) : true

		return matchStart && matchContains && matchExcludes && matchEnd
	})

	res.status(200).json({ words, count: words.length })
})

app.use((req, res,) => res.sendStatus(404))

const handler = serverless(app, {
	binary: ['image/*']
})

const wordContains = (word = '', chars = []) => {
	for (var i = 0; i < chars.length; i++) {
		if (word.includes(chars[i])) {
			return true
		}
	}
	return false
}

module.exports = {
	app, handler
}
