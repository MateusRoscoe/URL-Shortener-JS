class CodeValidation {
    static async post(req, res, next) {
        const data = req.body?.data

        if (!data) {
            res.status(400).send({ message: 'Data is required in the body' })
            return
        }
        if (typeof data !== 'string') {
            res.status(400).send({ message: 'Data must be a string' })
            return
        }

        next()
    }

    static async get(req, res, next) {
        const code = req.query?.code

        if (!code) {
            res.status(400).send({
                message: 'Code is required in query params',
            })
            return
        }

        next()
    }
}

module.exports = CodeValidation
