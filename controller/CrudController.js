import User from "../model/User"


export const addUser =async(req,res) =>{
    const {name,email,phone} =req.body
try {
    const user = await new User({
    name,
    email,
    phone
    })
    const data = await user.save()
    res.status(201).json({
    success:false,
    message:"add successfully add",
    data
    })
} catch (error) {
    res.status(401).json({
    success:false,
    message:error
    })
}
}

export const AllUser =async(req,res) =>{
    // const {name,email,phone} =req.body
    try {
        const user = await User.find()
        res.status(201).json({
        success:true,
        message:"all users ",
        user
        })
    } catch (error) {
        res.status(401).json({
        success:true,
        message:error
        })
    }
}
export const UpdateUser =async(req,res) =>{
    const {name,email,phone} =req.body
    const id =req.params.id
    try {
        const user = await User.findByIdAndUpdate(id)
        res.status(201).json({
        success:true,
        message:"add successfully",
        })
    } catch (error) {
        res.status(401).json({
        success:false,
        message:error
        })
    }
    }

export const DeleteUser =async(req,res) =>{
    const id =req.params.id
    try {
        const user = await User.findByIdAndRemove(id)
        res.status(201).json({
        success:true,
        message:"update successfully",
        user
        })
    } catch (error) {
        res.status(401).json({
        success:false,
        message:error
        })
    }
}