"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationError = void 0;
// Error object used in error handling middleware function
class ApplicationError extends Error {
    constructor(statusCode, message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = Error.name;
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}
exports.ApplicationError = ApplicationError;
