import User from "../model/User.js"
export const getUser = async (req, res)=>{
    const {id} = req.params
    try{
        const user = await User.findById(id)
       return  res.status(200).json(user)
    }
    catch(error){
        console.log(error.message)
    }
  

}