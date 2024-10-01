import express from "express";
import writerController from "../../controllers/writer.controller";

const router = express.Router();

router.post("", writerController.createRecord);
router.get("", writerController.findAll);
router.get("/:id", writerController.findById);
router.put("/:id", writerController.updateById);
router.delete("/:id", writerController.deleteById);

export default router;
