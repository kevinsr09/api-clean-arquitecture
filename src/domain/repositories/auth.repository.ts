import { type RegisterUserDto } from '../dtos/register-user.dto'
import { type User } from '../entities/User'

export interface AuthRepository {

  register: (resgisterUserDto: RegisterUserDto) => Promise<User>
}
