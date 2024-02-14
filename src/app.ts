import { envs } from './config'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

void (async () => {
  await main()
})()

async function main (): Promise<void> {
  const server = new Server({ port: envs.PORT, routes: AppRoutes.routes })
  await server.start()
}
