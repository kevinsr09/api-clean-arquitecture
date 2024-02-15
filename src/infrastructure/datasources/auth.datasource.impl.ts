import { BcryptAdapter } from '../../config/bcryptjs'
import { UserModel } from '../../data/mongodb/models/user.models'
import { type AuthDataSource } from '../../domain/datasources'
import { type RegisterUserDto } from '../../domain/dtos/register-user.dto'
import { type User } from '../../domain/entities/User'
import { CustomError } from '../../domain/errors/custom-error'
import { UserMapper } from '../mappers/user.mapper'

export class AuthDataSourceImpl implements AuthDataSource {
  async register (resgisterUserDto: RegisterUserDto): Promise<User> {
    try {
      const emailExists = await UserModel.findOne({ email: resgisterUserDto.email })

      if (emailExists) {
        throw CustomError.badRequest('Email already exists')
      }

      const user = await UserModel.create({
        name: resgisterUserDto.name,
        email: resgisterUserDto.email,
        password: BcryptAdapter.hash(resgisterUserDto.password)
      })

      await user.save()
      return UserMapper.userFromObject({ ...user.toObject(), id: user._id.toString(), password: resgisterUserDto.password })
    } catch (error) {
      console.log(error, 'error aqui')
      if (error instanceof CustomError) {
        throw error
      } else {
        throw CustomError.internalServerError('Something went wrong')
      }
    }
  }
}
