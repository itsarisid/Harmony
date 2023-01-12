import { APIResponse } from '../models/APIResponse';
import { Configs } from '../config/Config';
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
import { UsersService, UserCreationParams } from "../Services/UsersService";

const _CONFIGS = new Configs();

@Route("user")
export class UsersController extends Controller {
    @SuccessResponse("201", "Created") // Custom success response
    @Post("/")
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<APIResponse<User>> {
        this.setStatus(201); // set return status 201
        new UsersService().create(requestBody);

        // Create token
        const token = jwt.sign(
            requestBody,
            _CONFIGS.JWT.secret,
            {
                expiresIn: _CONFIGS.JWT.expiresIn,
                audience: _CONFIGS.JWT.audience,
                subject: _CONFIGS.JWT.subject,
            }
        );
        return new APIResponse<User>({
            ...requestBody,
            id: 1,
            token: token
        });
    }
}