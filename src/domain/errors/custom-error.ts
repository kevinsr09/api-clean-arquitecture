export class CustomError extends Error {
  constructor (message: string, public statusCode: number) {
    super(message)
  }

  static badRequest (message: string): CustomError {
    return new CustomError(message, 400)
  }

  static notFound (message: string): CustomError {
    return new CustomError(message, 404)
  }

  static unauthorized (message: string): CustomError {
    return new CustomError(message, 401)
  }

  static forbidden (message: string): CustomError {
    return new CustomError(message, 403)
  }

  static internalServerError (message: string = 'Internal server error'): CustomError {
    return new CustomError(message, 500)
  }
}
