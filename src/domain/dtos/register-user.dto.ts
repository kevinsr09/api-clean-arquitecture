import { Validators } from '../../config'

export class RegisterUserDto {
  private constructor (
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create (object: Record<string, any>): [string?, RegisterUserDto?] {
    const { name, email, password } = object

    if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string') { return ['email, name and password are required'] }

    if (!Validators.email.test(email)) { return ['email is invalid'] }

    if (password.length < 6) { return ['password must be at least 6 characters long'] }

    return [undefined, new RegisterUserDto(name, email, password)]
  }
}
