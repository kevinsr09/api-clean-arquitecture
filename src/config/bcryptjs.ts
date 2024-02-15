import { compareSync, hashSync } from 'bcryptjs'

export class BcryptAdapter {
  static saltRounds = 10
  static hash (password: string): string {
    return hashSync(password)
  }

  static compare (password: string, hash: string): boolean {
    return compareSync(password, hash)
  }
}
