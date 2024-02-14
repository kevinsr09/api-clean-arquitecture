import { type AuthDataSource } from '../../domain/datasources'
import { type RegisterUserDto } from '../../domain/dtos/register-user.dto'
import { type User } from '../../domain/entities/User'
import { type AuthRepository } from '../../domain/repositories'

export class AuthRepositoryImpl implements AuthRepository {
  constructor (private readonly dataSource: AuthDataSource) {}
  async register (resgisterUserDto: RegisterUserDto): Promise<User> {
    return await this.dataSource.register(resgisterUserDto)
  }
}
