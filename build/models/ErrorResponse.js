"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
class ErrorResponse {
    constructor() {
        this.id = 1;
        this.statusCode = 500;
        this.status = "Unexpected Error";
    }
}
exports.ErrorResponse = ErrorResponse;
