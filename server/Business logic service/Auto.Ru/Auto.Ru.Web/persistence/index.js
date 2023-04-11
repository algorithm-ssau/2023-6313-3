import UserModel from "./models/user.js";
import { sequelize } from "./setup.js";
import User from "./models/user.js";

const user = User(sequelize);

export { sequelize as db, user as User };
