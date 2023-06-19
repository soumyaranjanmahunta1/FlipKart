import { products } from "./Constants/data.js";
import ProductModel from "./Model/ProductSchema.js";
const DefaultData = async () => {
  try {
    await ProductModel.insertMany(products);
    console.log("Data imported successfully");
  } catch (err) {
    console.log(err.message);
  }
};
export default DefaultData;
