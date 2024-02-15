import Product from "../model/Product.js"
import ProductStat from "../model/ProductStat.js"

export const getProduct = async(req, res)=>{
    try{
        const AllProduct = await Product.find()

        const productswithStats = await Promise.all(
            AllProduct.map(async (product)=> {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat
                }
            })
        )
            res.status(200).json(productswithStats)
    }
    catch(error){
        console.log(error.message)
    }
  

}