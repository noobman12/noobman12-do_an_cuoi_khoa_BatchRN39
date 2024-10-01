import express from "express"
import bannersController from "../controllers/banners.controller"

const router = express.Router()

//1. Get All Banners
//GET localhost:8080/api/v1/banners
router.get("", bannersController.findAll);

//2. Get One Banners
//GET localhost:8080/api/v1/banners/:id
router.get("/:id", bannersController.findById);

//3. Create a new Banners
//POST localhost:8080/api/v1/banners
router.post("", bannersController.createRecord);

//4. Update a Banners
//PUT localhost:8080/api/v1/banners/:id
router.put("/:id", bannersController.updateById);

//5. Delete a Banners
//DELETE localhost:8080/api/v1/banners/:id
router.delete("/:id", bannersController.deleteById);

export default router;
