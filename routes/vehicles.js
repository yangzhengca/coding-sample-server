import express from "express";
import { getVehicles,createVehicle,updateVehicle, deleteVehicle } from "../controllers/vehicles.js";

const router=express.Router()

router.get('/', getVehicles)

router.post('/', createVehicle)

router.patch('/:id',updateVehicle)

router.delete('/:id',deleteVehicle)



export default router