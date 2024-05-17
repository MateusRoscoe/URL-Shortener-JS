const CodeService = require('../services/code-service')

class CodeHandler {
    static async get(req, res) {
        const code = req.query.code
        const data = await CodeService.getByCode(code)
        res.send(data)
    }

    static async post(req, res) {
        const data = req.body.data
        const code = await CodeService.generateCode(data)
        res.send({ code })
    }
}

module.exports = CodeHandler
