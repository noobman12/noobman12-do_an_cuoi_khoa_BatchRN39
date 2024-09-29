import express from "express";
import suppliersController from "../controllers/suppliers.controller";
const router = express.Router();

//1. Get All Brands
//GET localhost:8080/api/v1/brands
router.get("", suppliersController.findAll);

//2. Get One Category
//GET localhost:8080/api/v1/brands/:id
router.get("/:id", suppliersController.findById);

//3. Create a new category
//POST localhost:8080/api/v1/brands
router.post("", suppliersController.createRecord);

//4. Update a category
//PUT localhost:8080/api/v1/brands/:id
router.put("/:id", suppliersController.updateById);

//5. Delete a category
//DELETE localhost:8080/api/v1/brands/:id
router.delete("/:id", suppliersController.deleteById);

export default router;
