class AppError extends Error {
  constructor(statusCode, message, details = {}, code = "UNKNOWN_ERROR") {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;

    // Ensuring proper prototype chain
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

export default AppError;
