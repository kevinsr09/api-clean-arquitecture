import express, { type Router } from 'express'

interface ServerConfig {
  port?: number
  routes: Router
}
export class Server {
  public readonly server = express()
  private readonly port: number
  private readonly routes: Router
  constructor ({ port = 3000, routes }: ServerConfig) {
    this.port = port
    this.routes = routes
  }

  async start (): Promise<void> {
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))

    this.server.use(this.routes)

    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
