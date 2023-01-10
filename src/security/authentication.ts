// Auth.ts
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';
const logger = require('debug')('express');

export function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
): Promise<any> {
    if (securityName === 'jwt') {
        //Get the jwt token from the head
        const token = request.headers['authorization'] || "";
        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new Error('No token provided'));
            }
            jwt.verify(token, "harmony", function (err: any, decoded: any) {
                if (err) {
                    logger(err.name, err.message);
                    reject(err);
                } else {
                    console.log(decoded);
                    // Check if JWT contains all required scopes
                    // for (let scope of scopes || []) {
                    //     if (!decoded.scopes.includes(scope)) {
                    //         reject(new Error("JWT does not contain required scope."));
                    //     }
                    // }
                    resolve(decoded);
                }
            });
        });
    }
    else {
        //logger(err.name, err.message);
        return new Promise((resolve, reject) => reject(new Error(securityName)));
    }
}