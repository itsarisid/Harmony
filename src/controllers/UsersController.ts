import { APIResponse } from '../models/APIResponse';
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import { IUser } from "../interface/IUser";
import { UsersService } from "../Services/UsersService";
import { RegisterDto } from '../dtos/UserDTO';

@Route("user")
export class UsersController extends Controller {
    @SuccessResponse("201", "Created") // Custom success response
    @Post("/")
    public async createUser(
        @Body() requestBody: RegisterDto
    ): Promise<APIResponse<IUser>> {
        return new UsersService().create(requestBody);
    }
}