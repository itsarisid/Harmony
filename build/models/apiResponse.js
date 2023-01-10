"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
const StatusCode_1 = require("../interface/common/StatusCode");
class APIResponse {
    constructor(responseData) {
        this.data = responseData;
        this.statusCode = StatusCode_1.StatusCode.Ok;
        this.statusText = "OK";
        this.description = "Successfull";
        this.message = "Successfull";
    }
}
exports.APIResponse = APIResponse;
