import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/User";
import UserServices from "../services/users";

export const createUser = async (  request: Request,  response: Response, next: NextFunction) => {
  try {
    const userInformation = new User({
      email: request.body.email,
      password: request.body.password,
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
  try {
    const userData = await UserServices.findUserByEmail(request.body.email);
    if (!userData) {
      response.status(403).json({ message: "user do not have account yet" });
      return;
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
  const update = request.body;
  const userId = request.params.id;
  const updatedUser = await UserServices.updateUser(userId, update);
  response.json(updatedUser);
};