import { StatusCode } from './common/StatusCode';
export interface IAPIResponse<T> {
    message:string;
    code:StatusCode;
    data:T
}