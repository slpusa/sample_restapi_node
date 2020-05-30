/**
 * @Author Udara Premadasa
 * @module Error
 */

module.exports = {
    index(error, exception, statusCode) {
        Error.captureStackTrace(this, this.constructor);
        this.error = error || "Application Error";
        if (process.env.DEBUG == "true")
        this.exception = exception;
        this.statusCode = statusCode || 400;
    },

    UNAUTHORIZED: { message: "Unauthorized", code: "UNAUTHORIZED" },
};
  