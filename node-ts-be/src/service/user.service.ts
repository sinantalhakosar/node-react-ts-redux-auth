import User from "../model/user.model";
import { IUser } from "../interface/user.interface";

class UserService {
  async findUserByEmail(email: string) {
    return User.findOne({
      email: email,
    }).exec();
  }
}

export default new UserService();