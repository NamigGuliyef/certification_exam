import userModel from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).send({ success: false, message: "user email already exists" })
        } else {
            const newUser = await userModel.create(req.body)
            return res.status(200).send({ success: true, message: "create user successfully", newUser })
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in create user", error: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        return res.status(200).send({ success: true, message: "All users", users })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in getAll user", error: error.message })
    }
}

export const getSingleUser = async (req, res) => {
    try {
        const { _id } = req.params
        const user = await userModel.findById(_id)
        return res.status(200).send({ success: true, message: "Get Single user", user })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in get single user", error: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { _id } = req.params
        const updateUser = await userModel.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
        return res.status(200).send({ success: true, message: "Update User", updateUser })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in get single user", error: error.message })
    }
}

export const deletedUser = async (req, res) => {
    try {
        const { _id } = req.params
        const deletedUser = await userModel.findByIdAndDelete(_id)
        return res.status(200).send({ success: true, message: "Deleted User", deletedUser })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in get single user", error: error.message })
    }
}

