import Product from "../Model/ProductSchema.js"

export const getproducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (err) {
         res.status(500).json({message:err.message});
    }
    
}