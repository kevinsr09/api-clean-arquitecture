import { type RegisterUserDto } from '../dtos/register-user.dto'
import { type User } from '../entities/User'

export interface AuthDataSource {

  register: (userDto: RegisterUserDto) => Promise<User>
}
