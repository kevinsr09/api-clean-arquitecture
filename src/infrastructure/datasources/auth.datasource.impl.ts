import { type AuthDataSource } from '../../domain/datasources'
import { type RegisterUserDto } from '../../domain/dtos/register-user.dto'
import { User } from '../../domain/entities/User'
import { CustomError } from '../../domain/errors/custom-error'

export class AuthDataSourceImpl implements AuthDataSource {
  async register (resgisterUserDto: RegisterUserDto): Promise<User> {
    try {
      const user = new User('1', resgisterUserDto.name, resgisterUserDto.email, resgisterUserDto.password, ['user'])
      return user
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      } else {
        throw CustomError.internalServerError('Something went wrong')
      }
    }
  }
}
