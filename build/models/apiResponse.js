"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
class APIResponse {
    constructor(responseData) {
        this.data = responseData;
        this.description = "";
        this.message = "Successfull";
    }
}
exports.APIResponse = APIResponse;
