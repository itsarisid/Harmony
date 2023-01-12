"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentFile = exports.Environments = void 0;
var Environments;
(function (Environments) {
    Environments["LOCAL"] = "local";
    Environments["PRODUCTION"] = "production";
    Environments["DEV"] = "dev";
    Environments["TEST"] = "test";
    Environments["QA"] = "qa";
    Environments["STAGING"] = "staging";
})(Environments || (Environments = {}));
exports.Environments = Environments;
var EnvironmentFile;
(function (EnvironmentFile) {
    EnvironmentFile["LOCAL"] = ".env";
    EnvironmentFile["PRODUCTION"] = ".env.prod";
    EnvironmentFile["DEV"] = ".env";
    EnvironmentFile["TEST"] = ".env.test";
    EnvironmentFile["QA"] = ".env.stag";
    EnvironmentFile["STAGING"] = ".env.stag";
})(EnvironmentFile || (EnvironmentFile = {}));
exports.EnvironmentFile = EnvironmentFile;
