import express from "express";
import newController from "../../controllers/new.controller";

const router = express.Router();

router.post("", newController.createRecord);
router.get("", newController.findAll);
router.get("/:id", newController.findById);
router.put("/:id", newController.updateById);
router.delete("/:id", newController.deleteById);
export default router;
