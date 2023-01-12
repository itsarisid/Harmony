
import mongoose from 'mongoose';
import { Configs } from "./Config";
const config = new Configs();
import Blog from "../models/Blog"
const uri = `mongodb+srv://${config.dbCredentials.username}:${config.dbCredentials.password}@harmony.8w14cgj.mongodb.net/Harmony?retryWrites=true&w=majority`;
mongoose.connect(uri);
// Create a new blog post object
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  
  export default article