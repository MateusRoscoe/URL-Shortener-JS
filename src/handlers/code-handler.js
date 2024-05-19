const CodeService = require('../services/code-service')
const { Request, Response } = require('express')

class CodeHandler {
    /**
     * Handles GET requests to /code.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     */
    static async get(req, res) {
        const code = req.query.code
        const data = await CodeService.getByCode(code)
        if (!data) {
            res.sendStatus(404)
            return
        }
        res.send(data)
    }

    /**
     * Handles POST requests to /code.
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     */
    static async post(req, res) {
        const data = req.body.data
        const doc = await CodeService.generateCode(data)
        res.send({
            data: doc.data,
            code: doc.code,
            created_at: doc.created_at,
        })
    }
}

module.exports = CodeHandler
