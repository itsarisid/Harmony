"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const body_parser_1 = __importDefault(require("body-parser"));
const apiResponse_1 = require("./models/apiResponse");
const config = new config_1.Configs();
// Initialize the app.
const app = (0, express_1.default)();
// Error handling Middleware function reads the error message 
// and sends back a response in JSON format  
const errorHandler = (error, request, response, next) => {
    response.header("Content-Type", 'application/json');
    const status = error.statusCode || 400;
    response.status(status).json(new apiResponse_1.APIResponse(error, status));
};
// Call midlewares
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.urlencoded({ limit: '100mb', extended: true }));
// add multiple cors options as per your use
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:8322/',
    ],
}));
app.use(body_parser_1.default.json());
(0, routes_1.RegisterRoutes)(app);
app.use(errorHandler);
app.listen(config.PORT, () => {
    console.log("Server is running on port", config.PORT);
});
