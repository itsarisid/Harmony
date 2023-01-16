import { AppDataSource } from "./core/DataSource";
import {Post} from "./core/entity/Post";
import {Category} from "./core/entity/Category";

// connection settings are in the "ormconfig.json" file
AppDataSource.initialize().then(async () => {

    const category1 = new Category();
    category1.name = "TypeScript";

    const category2 = new Category();
    category2.name = "Programming";

    const post = new Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];

    await AppDataSource.manager.save(post);
    console.log("Post has been saved: ", post);

    const loadedPosts = await AppDataSource.manager.find(Post);
    console.log("Loaded posts from the database: ", loadedPosts);

    // const loadedSinglePosts = await connection.mongoManager.findOne(Post,{"title":"Some type of documents"})
    // console.log("Loaded posts from the database: ", loadedSinglePosts);

    // const loaded = await connection.mongoManager.deleteOne(Post,{"title":"Control flow based type analysis"})
    // console.log("delete posts from the database: ", loaded.result);

}).catch(error => console.log("Error: ", error));