import { type Request, type Response } from 'express'
import { RegisterUserDto } from '../../domain/dtos/register-user.dto'
import { type AuthRepository } from '../../domain/repositories'

export class AuthController {
  constructor (private readonly authRepository: AuthRepository) {}
  login (req: Request, res: Response): Response<any, Record<string, any>> {
    return res.json({ message: 'Hello login' })
  }

  register (req: Request, res: Response): Response<any, Record<string, any>> | undefined {
    const [error, registerUserDto] = RegisterUserDto.create(req.body as Record<string, any>)

    console.log(error, registerUserDto)

    if (!!error || !registerUserDto) {
      return res.status(400).json({ error })
    }

    this.authRepository.register(registerUserDto).then((user) => res.json(user)).catch((error) => res.status(500).json({ error }))
  }
}
