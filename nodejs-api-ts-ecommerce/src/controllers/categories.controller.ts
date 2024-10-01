import { Request, Response, NextFunction } from "express";
import categoriesService from "../services/categories.service";
import { sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res:Response, next:NextFunction)=>{
    try{
    const category = await categoriesService.findAll()
    sendJsonSuccess(res, "Success")(category)
    }catch (error){
        next(error)
    }
}

const findById = async (req: Request, res:Response, next:NextFunction)=>{
    try{
        const {id} = req.params
        const category = await categoriesService.findById(id)
        res.status(200).json({
            data: category
        })
    }catch (error){
        next(error)
    }
}

const createRecord = async (req: Request, res:Response, next:NextFunction)=>{
    try{
        console.log("<<=== 🚀 req.body ===>>", req.body);

        const category = await categoriesService.createRecord(req.body)

        console.log("<<=== 🚀 category controller ===>>", category);

        res.status(201).json({
            data: category,
          });
    }catch (error) {
        next(error);
      }
}

const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
  
      const category = await categoriesService.updateById(id, req.body);
  
      res.status(200).json({
        data: category,
      });
    } catch (error) {
      next(error);
    }
  };

  const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
  
      const category = await categoriesService.deleteById(id);
  
      res.status(200).json({
        data: category,
      });
    } catch (error) {
      next(error);
    }
  };

export default {
  findAll,
  findById,
  updateById,
  createRecord,
  deleteById
};
