import express from "express";
import staffsController from "../../controllers/staff.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 5 login requests per `window`
  message:
    "Too many login attempts from this IP, please try again after 5 minutes",
});

const router = express.Router();

router.post("/login", loginLimiter, staffsController.login);

router.get("/profile", authenticateToken("staff"), staffsController.profile);

router.post(
  "/refresh-token",
  authenticateToken("staff"),
  staffsController.refreshToken
);

router.get("", staffsController.findAll);

router.get("/:id", staffsController.findById);

router.post("", staffsController.createRecord);

router.put("/:id", staffsController.updateById);

router.delete("/:id", staffsController.deleteById);

export default router;
