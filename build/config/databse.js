"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const config = new config_1.Configs();
const Blog_1 = __importDefault(require("../models/Blog"));
const uri = `mongodb+srv://${config.dbCredentials.username}:${config.dbCredentials.password}@harmony.8w14cgj.mongodb.net/Harmony?retryWrites=true&w=majority`;
mongoose_1.default.connect(uri);
// Create a new blog post object
const article = new Blog_1.default({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
});
exports.default = article;
