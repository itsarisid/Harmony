"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    get(id, name) {
        return {
            id,
            email: "sajid@khan.com",
            name: name !== null && name !== void 0 ? name : "Sajid Khan",
            password: "123456",
            phoneNumbers: [],
            token: ""
        };
    }
    create(userCreationParams) {
        //Encrypt user password
        //encryptedPassword = await bcrypt.hash(password, 10);
        return Object.assign({ id: Math.floor(Math.random() * 10000) }, userCreationParams);
    }
}
exports.UsersService = UsersService;
