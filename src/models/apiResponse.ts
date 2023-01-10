import { IAPIResponse } from '../interface/IAPIResponse';

export class APIResponse<T> implements IAPIResponse<T> {
    constructor(responseData: T) {
        this.data = responseData;
        this.description = "";
        this.message = "Successfull";
    }
    description: string;
    message: string;
    data: T
}