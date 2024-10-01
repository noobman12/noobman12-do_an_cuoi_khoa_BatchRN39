import { Request, Response, NextFunction } from "express";
import bannersService from "../services/banners.service";
import { sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res:Response, next:NextFunction)=>{
    try{
    const banner = await bannersService.findAll()
    sendJsonSuccess(res, "Success")(banner)
    }catch (error){
        next(error)
    }
}

const findById = async (req: Request, res:Response, next:NextFunction)=>{
    try{
        const {id} = req.params
        const banner = await bannersService.findById(id)
        res.status(200).json({
            data: banner
        })
    }catch (error){
        next(error)
    }
}

const createRecord = async (req: Request, res:Response, next:NextFunction)=>{
    try{
        console.log("<<=== 🚀 req.body ===>>", req.body);

        const banner = await bannersService.createRecord(req.body)

        console.log("<<=== 🚀 banner controller ===>>", banner);

        res.status(201).json({
            data: banner,
          });
    }catch (error) {
        next(error);
      }
}

const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
  
      const banner = await bannersService.updateById(id, req.body);
  
      res.status(200).json({
        data: banner,
      });
    } catch (error) {
      next(error);
    }
  };

  const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
  
      const banner = await bannersService.deleteById(id);
  
      res.status(200).json({
        data: banner,
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
