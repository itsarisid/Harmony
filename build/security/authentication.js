"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const config_1 = require("./../config/config");
const jwt = __importStar(require("jsonwebtoken"));
const logger = require('debug')('express');
const _CONFIGS = new config_1.Configs();
const secret = _CONFIGS.JWT.secret || "HARMONY";
function expressAuthentication(request, securityName, scopes) {
    if (securityName === 'jwt') {
        //Get the jwt token from the head
        const token = request.headers['authorization'] || "";
        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new Error('No token provided'));
            }
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    logger(err.name, err.message);
                    reject(err);
                }
                else {
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
exports.expressAuthentication = expressAuthentication;
