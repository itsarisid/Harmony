import { StatusCode } from './common/StatusCode';
export interface IAPIResponse<T> {
    message:string;
    description?:string;
    data:T
}