import { Router } from "express";
import passport from "passport";

import { createUser, logInWithPassword, updateUserController } from "../controllers/users";

const router = Router();

router.post("/", createUser);

router.post("/login", logInWithPassword);
router.put("/:id",passport.authenticate("jwt", { session: false }),updateUserController);

export default router;