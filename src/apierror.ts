// Not Found Error Class
export class NotFoundError extends Error {
  
  code = 404;

  error = "Not Found"

}

// Server Error Class
export class ServerError extends Error {

  code = 500;

  error = "Server Error"

  message = "Internal Server Error"

}

// Bad Request Error Class
export class BadRequestError extends Error {

  code = 400;

  error = "Bad Request"

}

// Api Error Interface
export interface IApiError extends Error {
  code: number,
  error: string
}