import { StatusCode } from './common/StatusCode';
export interface IAPIResponse<T> {
    statusCode: StatusCode,
    statusText: string;
    description:string;
    message:string;
    data:T
}