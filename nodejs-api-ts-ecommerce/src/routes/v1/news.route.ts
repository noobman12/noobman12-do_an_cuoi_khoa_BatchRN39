import express from "express";
import newsController from "../../controllers/news.controller";

const router = express.Router();

router.post("", newsController.createRecord);
router.get("", newsController.findAll);
router.get("/:id", newsController.findById);
router.put("/:id", newsController.updateById);
router.delete("/:id", newsController.deleteById);
export default router;
