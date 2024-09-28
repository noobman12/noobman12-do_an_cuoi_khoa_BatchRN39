import express from "express";
import ordersController from "../../controllers/order.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";
const router = express.Router();

router.get("", ordersController.findAll);

router.get("/:id", ordersController.findById);

router.post("", authenticateToken("customer"), ordersController.createRecord);

router.put("/:id", ordersController.updateById);

router.delete("/:id", ordersController.deleteById);

export default router;
