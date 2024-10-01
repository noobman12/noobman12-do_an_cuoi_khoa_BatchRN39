import express from "express"
import categoriesControllers from "../controllers/categories.controllers"; 

const router = express.Router()

//1. Get All Categories
//GET localhost:8080/api/v1/categories
router.get("", categoriesControllers.findAll);

//2. Get One Categories
//GET localhost:8080/api/v1/categories/:id
router.get("/:id", categoriesControllers.findById);

//3. Create a new Categories
//POST localhost:8080/api/v1/categories
router.post("", categoriesControllers.createRecord);

//4. Update a Categories
//PUT localhost:8080/api/v1/categories/:id
router.put("/:id", categoriesControllers.updateById);

//5. Delete a Categories
//DELETE localhost:8080/api/v1/categories/:id
router.delete("/:id", categoriesControllers.deleteById);

export default router;
