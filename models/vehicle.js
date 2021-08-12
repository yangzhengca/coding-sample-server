import mongoose from "mongoose";

const vehiclesSchema = mongoose.Schema({
  make: String,
  model: String,
  year: String,
  price: String,
  isSold: {
    type: Boolean,
    default: false,
  },
});

const Vehicles = mongoose.model("Vehicles", vehiclesSchema);
export default Vehicles;
