import mongoose from "mongoose";

class dbClient {
    constructor() {
        this.connectionDB()
    }

    async connectionDB() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/swapi?retryWrites=true&w=majority`
        await mongoose.connect(queryString)
    }

    async disconnectDB() {
        try {
            await mongoose.disconnect()
            console.log("DB disconnected")
        } catch (e) {
            console.error(e)
        }
    }
}

export default new dbClient()