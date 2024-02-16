import Product from "../model/Product.js"
import ProductStat from "../model/ProductStat.js"
import User from "../model/User.js"
import Transaction from "../model/Transaction.js"
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
    }}

export const getAllUser = async(req, res)=>{
    try{
        const AllUser = await User.find({ role : "user"}).select("-password")

        res.status(200).json(AllUser)
    }
    catch(error){
        console.log(error.message)
    }
}

export const getTransaction = async(req, res)=>{
    try{
        //sort when coming from the client side should look like this {"field": "userId", "sort": "desc"}
        const {page = 1, pageSize = 20, sort = null, search = ""} = req.query;
        //formatted sort should look like {userId: -1} meaning the databse will accept this in this kind of form
        const generalSort = ()=>{
            const sortParsed = JSON.parse(sort)
            const sortFormatted = {
                [sortParsed.field] : (sortParsed.sort === "asc" ? 1 : -1)
            };
            return sortFormatted
        }
        const sortFormatted = Boolean(sort) ? generalSort() : {}

        const AllTransaction = Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, "i")}},
                {userId: {$regex: new RegExp(search, "i")}}
            ]
        }).sort(sortFormatted).skip(page * pageSize).limit(pageSize).exec();;

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i"}
        })
        res.status(200).json({
            AllTransaction,
             total
        })
    }
    catch(error){
        console.log(error.message)
    }
}

