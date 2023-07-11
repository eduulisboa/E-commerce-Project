import Product, {UserDocument} from "../models/User";

export const createUserService = async (user: UserDocument): Promise<UserDocument> => {
    return await user.save();
  }