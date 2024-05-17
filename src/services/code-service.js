const { base10_to_base62 } = require('../helpers/common-helper')
const DataModel = require('../models/data-model')

let counter = 238328

class CodeService {
    /**
     * Generates a code and stores the data in the database.
     * @param {String} data - The data to be stored.
     */
    static async generateCode(data) {
        const currentCounter = CodeService.getAndIncrementCounter()
        const code = base10_to_base62(currentCounter)

        await DataModel.write({ code, data })

        return code
    }

    static getAndIncrementCounter() {
        return counter++
    }

    static async getByCode(code) {
        return await DataModel.getByCode(code)
    }
}

module.exports = CodeService
