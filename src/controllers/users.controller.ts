import { APIResponse } from './../models/apiResponse';
import { Configs } from './../config/config';
import * as jwt from 'jsonwebtoken';
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
import { User } from "../interface/User";
import { UsersService, UserCreationParams } from "../Services/users.service";

const _CONFIGS = new Configs();
const secret = _CONFIGS.JWT.secret || "HARMONY";

@Route("user")
export class UsersController extends Controller {
    @SuccessResponse("201", "Created") // Custom success response
    @Post("/")
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<APIResponse<object>> {
        this.setStatus(201); // set return status 201
        new UsersService().create(requestBody);

        // Create token
        const token = jwt.sign(
            requestBody,
            secret,
            {
                expiresIn: "2h",
            }
        );
        return new APIResponse<object>({
            ...requestBody,
            token: token
        });
    }
}