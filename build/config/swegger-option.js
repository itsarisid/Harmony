"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SwaggerOption = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Sajid Khan",
                url: "https://github.com/itsarisid/Harmony",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8322",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
exports.default = SwaggerOption;
