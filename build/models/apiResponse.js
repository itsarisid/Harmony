"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
const StatusCode_1 = require("../interface/common/StatusCode");
class APIResponse {
    constructor(responseData, code = StatusCode_1.StatusCode.Ok, message = "") {
        this.code = code;
        this.message = message !== null && message !== void 0 ? message : Object.keys(StatusCode_1.StatusCode)[Object.values(StatusCode_1.StatusCode).indexOf(code)];
        this.data = responseData;
    }
}
exports.APIResponse = APIResponse;
