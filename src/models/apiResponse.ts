import { StatusCode } from '../interface/common/StatusCode';
import { IAPIResponse } from '../interface/IAPIResponse';

export class APIResponse<T> implements IAPIResponse<T> {
    constructor(responseData: T) {
        this.data = responseData;
        this.statusCode = StatusCode.Ok;
        this.statusText = "OK";
        this.description = "Successfull";
        this.message = "Successfull";
    }
    statusCode: StatusCode;
    statusText: string;
    description: string;
    message: string;
    data: T
}