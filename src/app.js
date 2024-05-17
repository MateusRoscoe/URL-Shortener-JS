require('dotenv').config()

const express = require('express')
const app = express()
const port = Number(process.env.PORT || 3000)
const CodeHandler = require('./handlers/code-handler')
const CodeValidation = require('./validations/code-validation')

app.use(express.json())

app.get('/code', CodeValidation.get, (req, res) => {
    CodeHandler.get(req, res)
})

app.post('/code', CodeValidation.post, (req, res) => {
    CodeHandler.post(req, res)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
