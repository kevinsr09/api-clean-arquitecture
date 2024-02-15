import mongoose from 'mongoose'

interface Options {
  uri: string
  dbName: string
}

export class MongoDatabase {
  static async connect ({ uri, dbName }: Options): Promise<void> {
    try {
      await mongoose.connect(uri, {
        dbName
      })

      console.log('mongo connected')
    } catch (error) {
      console.log('mongo connect error', error)
      throw error
    }
  }
}
