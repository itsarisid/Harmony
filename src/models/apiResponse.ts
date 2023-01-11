import { IAPIResponse } from '../interface/IAPIResponse';

export class APIResponse<T> implements IAPIResponse<T> {
    constructor(responseData: T
        , message: string = "Successfull"
        , description: string = ""
        ) {
        this.data = responseData;
        this.message = message;
        this.description = description;
    }
    message: string;
    description?: string;
    data: T
}