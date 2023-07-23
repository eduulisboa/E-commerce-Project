import { NextFunction, Request, Response, Router } from "express";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/User";
import UserServices from "../services/users";
import { UnauthorizedError } from "../helpers/apiError";

export const createUser = async (  request: Request,  response: Response, next: NextFunction) => {
  const { email, password } = request.body
  try {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const userInformation = new User({
      email,
      password: hashedPassword,
    });
    const newUser = await UserServices.createUserService(userInformation);
    response.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassword = async (request: Request, response: Response, next: NextFunction) => {
  const { email, password } = request.body
  try {
    const userData = await UserServices.findUserByEmail(email);
    if (!userData) {
      response.status(403).json({ message: "user do not have account yet" });
      return;
    }

    const hashedPassword =  userData.password
    const isCorrectPassword = await  bcrypt.compare(password, hashedPassword)

    if (!isCorrectPassword) {
      throw new UnauthorizedError()
    }

    const token = jwt.sign(
      {
        email: userData.email,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    response.json({ userData, token });
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (request: Request, response: Response, next: NextFunction) => {
  try {
  const update = request.body;
  const userId = request.params.id;
  const updatedUser = await UserServices.updateUser(userId, update);
  response.status(200).json(updatedUser)
  }
  catch (error) {
    next(error)
  }
}
