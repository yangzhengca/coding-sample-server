import mongoose from "mongoose"
import Vehicle from "../models/vehicle.js"

export const getVehicles=async (req,res)=>{
    try{
        const vehicles = await Vehicle.find()
        
        res.status(200).json(vehicles)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}


export const createVehicle = async (req,res)=>{
    const vehicle=req.body
    const newVehicle = new Vehicle(vehicle)
    try {
        await newVehicle.save()

        res.status(201).json(newVehicle)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}


export const updateVehicle = async (req, res) => {
    const { id:_id } = req.params;

    const vehicle=req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No vehicle with id: ${id}`);


    const updatedVehicle = await Vehicle.findByIdAndUpdate(_id, {...vehicle, _id}, { new: true });

    res.json(updatedVehicle);
}


export const deleteVehicle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No vehicle with id: ${id}`);

    await Vehicle.findByIdAndRemove(id);

    res.json({ message: "Vehicle deleted successfully." });
}


