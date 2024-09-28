import express from "express";
import customersController from "../../controllers/customer.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 5 login requests per `window`
  message:
    "Too many login attempts from this IP, please try again after 5 minutes",
});

const router = express.Router();

router.post("/login", loginLimiter, customersController.login);

router.get(
  "/profile",
  authenticateToken("customer"),
  customersController.profile
);

router.post(
  "/refresh-token",
  authenticateToken("customer"),
  customersController.refreshToken
);

router.get("", customersController.findAll);

router.get("/:id", customersController.findById);

router.post("", customersController.createRecord);

router.put("/:id", customersController.updateById);

router.delete("/:id", customersController.deleteById);

export default router;
