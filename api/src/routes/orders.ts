import { Router } from "express";
import passport from "passport";

import {
  createOrderController,
  getOrderListByUserId,
} from "../controllers/orders";

const orderRouter = Router();

orderRouter.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  createOrderController
);

orderRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getOrderListByUserId
);

export default orderRouter;