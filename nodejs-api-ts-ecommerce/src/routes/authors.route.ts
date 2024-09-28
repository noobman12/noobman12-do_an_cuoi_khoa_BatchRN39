import express from "express";
import authorsController from "../controllers/authors.controller";
const router = express.Router();

//1. Get All Brands
//GET localhost:8080/api/v1/brands
router.get("", authorsController.findAll);

//2. Get One Category
//GET localhost:8080/api/v1/brands/:id
router.get("/:id", authorsController.findById);

//3. Create a new category
//POST localhost:8080/api/v1/brands
router.post("", authorsController.createRecord);

//4. Update a category
//PUT localhost:8080/api/v1/brands/:id
router.put("/:id", authorsController.updateById);

//5. Delete a category
//DELETE localhost:8080/api/v1/brands/:id
router.delete("/:id", authorsController.deleteById);

export default router;
