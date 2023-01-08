import { ResponseModel } from './../interface/ResponseModel';
export class ErrorResponse implements ResponseModel {
    id=1;
    statusCode=500;
    status="Unexpected Error"
    
}