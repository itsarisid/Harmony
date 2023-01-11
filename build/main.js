"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = require("./routes/routes");
const body_parser_1 = __importDefault(require("body-parser"));
const ErrorHandler_1 = __importDefault(require("./models/ErrorHandler"));
const config = new config_1.Configs();
// Initialize the app.
const app = (0, express_1.default)();
// Call midlewares
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
//app.use(cors());
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
// Attach the second Error handling Middleware
// function defined above (which sends back the response)
app.use(ErrorHandler_1.default);
(0, routes_1.RegisterRoutes)(app);
app.listen(config.PORT, () => {
    console.log("Server is running on port", config.PORT);
});
