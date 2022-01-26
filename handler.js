const serverless = require('serverless-http')
const express = require('express')
const app = express()

const words = require('./data/words_len_5.json')

/*eslint no-unused-vars: ["error", {"args": "after-used"}]*/

// app.get('/', (req, res,) => {
// 	return res.status(200).json({
// 		message: 'Hello from root!'
// 	})
// })
app.use(express.static('public'))

app.get('/hello', (req, res,) => {
	return res.status(200).json({
		message: 'Hello from path!'
	})
})

app.get('/wordle/:letter', (req, res,) => {
	const letter = req.params.letter
	return res.status(200).json(words.filter(word => word.includes(letter)))
})

app.use((req, res,) => {
	return res.status(404).json({
		error: 'Not Found',
	})
})

module.exports.app = app
module.exports.handler = serverless(app)
