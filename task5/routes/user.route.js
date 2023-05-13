import { Router } from "express";
import { createUser, deletedUser, getAllUsers, getSingleUser, updateUser } from "../controllers/user.controller.js";
const r = Router()

// user create
r.post('/createUser', createUser)
//user getAll
r.get('/getAll', getAllUsers)
//user get single
r.get('/getSingleUser/:_id', getSingleUser)
//user update
r.put('/updateUser/:_id', updateUser)
//user delete
r.delete('/deleteUser/:_id', deletedUser)

export default r