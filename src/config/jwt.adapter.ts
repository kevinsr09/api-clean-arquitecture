import jwt from 'jsonwebtoken'
export class JwtAdapter {
  static async generateToken (payload: Record<string, any>, duration: string): Promise<string | undefined> {
    return await new Promise((resolve, reject) => {
      jwt.sign(payload, 'seet', {
        expiresIn: duration
      }, (error, token) => {
        if (error) { resolve(undefined); return }

        resolve(token as string)
      })
    })
  }
}
