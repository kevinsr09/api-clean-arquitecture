import { envs } from './config'
import { MongoDatabase } from './data/mongodb/mongo-database'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

void (async () => {
  await main()
})()

async function main (): Promise<void> {
  await MongoDatabase.connect({ uri: envs.MONGO_URI, dbName: envs.MONGO_DB })

  const server = new Server({ port: envs.PORT, routes: AppRoutes.routes })
  await server.start()
}
