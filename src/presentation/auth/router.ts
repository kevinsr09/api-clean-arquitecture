import { Router } from 'express'
import { AuthController } from './controller'
import { AuthRepositoryImpl } from '../../infrastructure/repositories/auth.repository.impl'
import { AuthDataSourceImpl } from '../../infrastructure/datasources/auth.datasource.impl'

export class AuthRoutes {
  static get routes (): Router {
    const router = Router()

    const authDataSourceImpl = new AuthDataSourceImpl()
    const authRepositoryImpl = new AuthRepositoryImpl(authDataSourceImpl)
    const authController = new AuthController(authRepositoryImpl)

    router.get('/login', authController.login.bind(authController))
    router.post('/register', authController.register.bind(authController))

    return router
  }
}
