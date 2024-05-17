const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGODB_URI)
const collection = client
    .db(process.env.MONGO_DB_NAME)
    .collection(process.env.MONGO_COLLECTION_NAME)

/**
 * Represents a data model for storing and retrieving data.
 */
class DataModel {
    /**
     * Writes data to the database.
     * @param {Object} doc - The document to be written.
     * @param {string} doc.code - The code associated with the data.
     * @param {String} doc.data - The data to be stored.
     */
    static async write(doc) {
        try {
            // Add timestamp for created_at
            doc.created_at = new Date()

            const result = await collection.insertOne(doc)
            console.log(`Document inserted with ID: ${result.insertedId}`)
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
            console.log(doc)
            return doc
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = DataModel
