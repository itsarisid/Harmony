import { StatusCode } from './common/StatusCode';
export interface IAPIResponse<T> {
    description:string;
    message:string;
    data:T
}