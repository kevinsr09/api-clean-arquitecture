import { type Request, type Response } from 'express'
import { RegisterUserDto } from '../../domain/dtos/register-user.dto'
import { type AuthRepository } from '../../domain/repositories'
import { JwtAdapter } from '../../config/jwt.adapter'
import { UserModel } from '../../data/mongodb/models/user.models'

export class AuthController {
  constructor (private readonly authRepository: AuthRepository) {}
  login (req: Request, res: Response): Response<any, Record<string, any>> {
    return res.json({ message: 'Hello login' })
  }

  register (req: Request, res: Response): Response<any, Record<string, any>> | undefined {
    const [error, registerUserDto] = RegisterUserDto.create(req.body as Record<string, any>)

    if (!!error || !registerUserDto) {
      return res.status(400).json({ error })
    }

    this.authRepository.register(registerUserDto)
      .then(async (user) => {
        const token = await JwtAdapter.generateToken({ id: user.id }, '1h')
        return res.json({ user, token })
      })
      .catch((error) => res.status(500).json({ error }))
  }

  getUsers (req: Request, res: Response): undefined {
    UserModel.find()
      .then((users) => res.json({ users }))
      .catch((error) => res.status(500).json({ error }))
  }
}
