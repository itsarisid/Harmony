import dotenv from 'dotenv';
dotenv.config();
export class Configs {
    dbCredentials={
        username:process.env.USER_NAME,
        password:process.env.PASSWORD
    };
    PORT = process.env.PORT || 8322;
}