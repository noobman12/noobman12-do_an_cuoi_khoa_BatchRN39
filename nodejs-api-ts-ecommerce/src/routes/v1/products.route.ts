import express from "express";
import productsController from "../../controllers/products.controller";
const router = express.Router();

//1. Get All Brands
//GET localhost:8080/api/v1/brands
router.get("", productsController.findAll);

//2. Get One Category
//GET localhost:8080/api/v1/brands/:id
router.get("/:id", productsController.findById);

//3. Create a new category
//POST localhost:8080/api/v1/brands
router.post("", productsController.createRecord);

//4. Update a category
//PUT localhost:8080/api/v1/brands/:id
router.put("/:id", productsController.updateById);

//5. Delete a category
//DELETE localhost:8080/api/v1/brands/:id
router.delete("/:id", productsController.deleteById);

export default router;
