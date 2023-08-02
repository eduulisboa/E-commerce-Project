import { NotFoundError } from "../helpers/apiError";
import User, {UserDocument} from "../models/User";

export const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return await user.save();
}

const findUserByEmail = async (userEmail: string): Promise<UserDocument> => {
  const foundUser = await User.findOne({email: userEmail})
  if (!foundUser) {
    throw new NotFoundError(`product ${userEmail} not found`)
  }
  return foundUser
}
const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  });

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`);
  }
  return foundUser;
};

/*const findOrCreate = async () => {

}
*/
export default { createUserService, findUserByEmail, updateUser };