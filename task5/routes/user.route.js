import { Router } from "express";
import userModel from "../models/user.model.js";

const r = Router()

// user create
r.post('/create', async (req, res) => {
    const newUser = await userModel.create(req.body)
    try {
        if (!newUser) {
            return res.status(400).send({ success: false, message: "user already exists" })
        } else {
            return res.status(200).send({ success: true, message: "create user successfully" })
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in create user", error: error.message })
    }
})

//user getAll

r.get('/getAll', async (req, res) => {
    try {
        const users = await userModel.find()
        return res.status(200).send({ success: true, message: "All users", users })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in getAll user", error: error.message })
    }
})

//user get single

r.get('/getSingleUser', async (req, res) => {
    try {
        const { _id } = req.params
        const user = await userModel.findById(_id)
        return res.status(200).send({ success: true, message: "Get Single users", user })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in get single user", error: error.message })
    }
})

//user update

r.put('/updateUser', async (req, res) => {
    try {
        const { _id } = req.params
        const updateUser = await userModel.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
        return res.status(200).send({ success: true, message: "Update User", updateUser })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in get single user", error: error.message })
    }
})

//user delete

r.put('/deleteUser', async (req, res) => {
    try {
        const { _id } = req.params
        const deleteUser = await userModel.findByIdAndDelete(_id)
        return res.status(200).send({ success: true, message: "Deleted User", deleteUser })
    } catch (error) {
        return res.status(500).send({ success: false, message: "Error in get single user", error: error.message })
    }
})

export default r