import createError from "http-errors";
import Banner from "../models/banner.model"; 
import { ObjectId } from "mongoose";

type TBanner = {
    _id : ObjectId;
    title: String;
    link: String;
    image: String;
    isHome: Boolean;
    isActive: Boolean;
    startDate: Date;
    endDate: Date
}

const findAll = async () =>{
    const banner = await Banner.find();
    return banner
}

const findById = async (id:string) =>{
    const banner = await Banner.findById(id)
    if(!banner){
        throw createError(400, "Banner Not Found")
    }
    return banner
}

const createRecord = async (payload: TBanner) =>{
    console.log("<<=== ðŸš€ payload ===>>", payload)

    const banner = await Banner.create(payload)

    console.log("<<=== ðŸš€ create banner ===>>", banner);
    
    return banner
}

const updateById = async (id:string, payload:TBanner) =>{
    const banner = await Banner.findByIdAndUpdate(id,payload,{
        new: true
    })
    console.log("<<=== ðŸš€ banner ===>>", banner);

    if (!banner)
        throw createError(400, "Banner Not Found")

    return banner 
}

const deleteById = async (id:string)=>{
    const banner = await Banner.findByIdAndDelete(id)

    if (!banner)
        throw createError(400, "Banner Not Found")

    return banner
}
export default {
    findAll,
    findById,
    createRecord,
    updateById,
    deleteById
}