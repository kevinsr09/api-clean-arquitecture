import { User } from '../../domain/entities/User'

export class UserMapper {
  static userFromObject (object: Record<string, any>): User {
    const { id, name, email, password, roles } = object

    if (typeof id !== 'string' || typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('Invalid user object')
    }

    if (!Array.isArray(roles)) {
      throw new Error('Invalid user object')
    }

    if (roles.some((role) => typeof role !== 'string')) {
      throw new Error('Invalid user object')
    }

    return new User(id, name, email, password, roles as string[])
  }
}
