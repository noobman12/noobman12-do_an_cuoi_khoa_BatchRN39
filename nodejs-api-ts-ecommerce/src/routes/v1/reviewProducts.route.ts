import express from "express";
import reviewProductsController from "../../controllers/reviewProducts.controllers";
const router = express.Router();

//1. Get All Brands
//GET localhost:8080/api/v1/brands
router.get("", reviewProductsController.findAll);

//2. Get One Category
//GET localhost:8080/api/v1/brands/:id
router.get("/:id", reviewProductsController.findById);

//3. Create a new category
//POST localhost:8080/api/v1/brands
router.post("", reviewProductsController.createRecord);

//4. Update a category
//PUT localhost:8080/api/v1/brands/:id
router.put("/:id", reviewProductsController.updateById);

//5. Delete a category
//DELETE localhost:8080/api/v1/brands/:id
router.delete("/:id", reviewProductsController.deleteById);

export default router;
