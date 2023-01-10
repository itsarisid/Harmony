import { Post, Route, Security } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("auth")
export class AuthController {
  @Post("/login")
  public async login(): Promise<PingResponse> {
    return {
      message: "successfull",
    };
  };
  @Post("/change-password")
  public async changePassword(): Promise<PingResponse> {
    return {
      message: "change password",
    };
  };
  @Post("/register")
  public async register(): Promise<PingResponse> {
    return {
      message: "change password",
    };
  }
}