import { Request, Response, NextFunction } from "express";

import orderServices from "../services/orders";
import Order from "../models/Order";

const createOrderController = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const newOrder = new Order({
      userId: request.params.userId,
      productList: request.body.productList,
    });
    const order = await orderServices.createOrder(newOrder);
    response.json(order);
  } catch (error) {
    next(error);
  }
};
