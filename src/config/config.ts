import dotenv from 'dotenv';
dotenv.config();
export class Configs {

    dbCredentials = {
        name: process.env.DATABASE_NAME,
        username: process.env.USER_NAME,
        password: process.env.PASSWORD
    }

    PORT = process.env.PORT || 8322

    defaultPassword = process.env.DEFAULT_PASSWORD || "default123@harmony"

    JWT = {
        secret: process.env.SECRET_KEY || "HARMONY",
        audience: process.env.AUDIENCE || "www.arisid.com",
        issuer: process.env.ISSUER || "Harmony",
        expiresIn: process.env.EXPIRE_IN || "1h",
        subject: process.env.SUBJECT || "Harmony App",
    }
}