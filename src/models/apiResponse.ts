import { StatusCode } from '../interface/common/StatusCode';
import { IAPIResponse } from '../interface/IAPIResponse';

export class APIResponse<T> implements IAPIResponse<T> {
    constructor(responseData: T
        , code: StatusCode = StatusCode.Ok
        , message: string = ""
    ) {
        this.code = code;
        this.message = message ? message : Object.keys(StatusCode)[Object.values(StatusCode).indexOf(code)];
        this.data = responseData;

    }
    code: StatusCode
    message: string;
    data: T
}