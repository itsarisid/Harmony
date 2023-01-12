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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const dotenv_1 = require("dotenv");
const environment_constant_1 = require("./environment.constant");
class Environment {
    /**
     *
     * @param NODE_ENV
     */
    constructor(NODE_ENV) {
        this.env = NODE_ENV || process.env.NODE_ENV || environment_constant_1.Environments.DEV;
        this.setEnvironment(this.env);
        const port = process.env.PORT || 3146;
        this.port = Number(port);
        this.applyEncryption = JSON.parse(process.env.APPLY_ENCRYPTION || "false");
        this.secretKey = process.env.SECRET_KEY || "S23P16B08";
    }
    /**
     *
     * @returns
     */
    getCurrentEnvironment() {
        return this.env;
    }
    /**
     *
     * @param env
     */
    setEnvironment(env) {
        let envPath;
        this.env = env || environment_constant_1.Environments.LOCAL;
        const rootdir = path.resolve(__dirname, '../../');
        switch (env) {
            case environment_constant_1.Environments.PRODUCTION:
                envPath = path.resolve(rootdir, environment_constant_1.EnvironmentFile.PRODUCTION);
                break;
            case environment_constant_1.Environments.TEST:
                envPath = path.resolve(rootdir, environment_constant_1.EnvironmentFile.TEST);
                break;
            case environment_constant_1.Environments.STAGING:
                envPath = path.resolve(rootdir, environment_constant_1.EnvironmentFile.STAGING);
                break;
            case environment_constant_1.Environments.LOCAL:
                envPath = path.resolve(rootdir, environment_constant_1.EnvironmentFile.LOCAL);
                break;
            default:
                envPath = path.resolve(rootdir, environment_constant_1.EnvironmentFile.LOCAL);
        }
        if (!fs.existsSync(envPath)) {
            throw new Error('.env file is missing in root directory');
        }
        (0, dotenv_1.config)({ path: envPath });
    }
    /**
     *
     * @returns
     */
    isProductionEnvironment() {
        return this.getCurrentEnvironment() === environment_constant_1.Environments.PRODUCTION;
    }
    /**
     *
     * @returns
     */
    isDevEnvironment() {
        return (this.getCurrentEnvironment() === environment_constant_1.Environments.DEV ||
            this.getCurrentEnvironment() === environment_constant_1.Environments.LOCAL);
    }
    /**
     *
     * @returns
     */
    isTestEnvironment() {
        return this.getCurrentEnvironment() === environment_constant_1.Environments.TEST;
    }
    /**
     *
     * @returns
     */
    isStagingEnvironment() {
        return this.getCurrentEnvironment() === environment_constant_1.Environments.STAGING;
    }
}
exports.default = Environment;
