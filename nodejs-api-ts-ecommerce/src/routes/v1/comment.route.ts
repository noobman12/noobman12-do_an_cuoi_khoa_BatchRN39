import express from "express";
import commentController from "../../controllers/comment.controller";

const router = express.Router();

router.post("", commentController.createRecord);
router.get("", commentController.findAll);
router.get("/:id", commentController.findById);
router.put("/:id", commentController.updateById);
router.delete("/:id", commentController.deleteById);

export default router;
