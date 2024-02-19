import Product from "../model/Product.js"
import ProductStat from "../model/ProductStat.js"
import User from "../model/User.js"
import Transaction from "../model/Transaction.js"
import OverallStat from "../model/OverallStat.js"
import getCountryIso3 from "country-iso-2-to-3"
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

export const getTransactions = async (req, res) => {
    try {
      // sort should look like this: { "field": "userId", "sort": "desc"}
      const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;
  
      // formatted sort should look like { userId: -1 }
      const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };
  
        return sortFormatted;
      };
      const sortFormatted = Boolean(sort) ? generateSort() : {};
  
      const transactions = await Transaction.find({
        $or: [
          { cost: { $regex: new RegExp(search, "i") } },
          { userId: { $regex: new RegExp(search, "i") } },
        ],
      })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);
  
      const total = await Transaction.countDocuments({
        cost: { $regex: search, $options: "i" },
      });
  
      res.status(200).json({
        transactions,
        total,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const getGeography = async(req, res)=>{
    try{
        const AllUser = await User.find();
        /*
        first we have to create key: value like "AR": 1, "CR": 2 because
        so first we have to map of the user data and then find the country from
        each user and assign is to the accumulator object as key and value and then
        when that country of the user is found again it will add the value to the each 
        of the object
        */
        const mappedLocations = AllUser.reduce((accumulator, {country})=>{
          const countryISO3 = getCountryIso3(country)
          if(!accumulator[countryISO3]){
             accumulator[country] = 0
          }
           accumulator[country]++;
           return accumulator;
        }, {});
          const formattedLocations = Object.entries(mappedLocations).map(
            ([country, count])=>{
              return {id: country, value:count};
            }
          )
        res.status(200).json(formattedLocations);

    }
    catch(error){
      res.status(404).json({message: error.message})
    }
  }

  