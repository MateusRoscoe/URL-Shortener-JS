const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_URI)
const collection = client
    .db(process.env.MONGO_DATABASE)
    .collection(process.env.MONGO_COLLECTION_NAME)

/**
 * Represents a data model for storing and retrieving data.
 */
class DataModel {
    /**
     * Writes data to the database.
     * @param {string} code - The code associated with the data.
     * @param {String} data - The data to be stored.
     * 
     */
    static async write(code, data) {
        try {
            // Add timestamp for created_at
            const created_at = new Date()

            await collection.insertOne({
                code,
                data,
                created_at,
            })

            return {
                data,
                code,
                created_at,
            }
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Reads data from the database.
     * @param {String} code - The code to query the data.
     */
    static async getByCode(code) {
        try {
            const doc = await collection.findOne({ code })
            return doc
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = DataModel
