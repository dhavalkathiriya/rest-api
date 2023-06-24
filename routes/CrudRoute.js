import express from 'express'
import { AllUser, DeleteUser, UpdateUser, addUser } from '../controller/CrudController'

const CrudRoute = express.Router()

CrudRoute.post("/",addUser)
CrudRoute.get("/",AllUser)
CrudRoute.put("/:id",UpdateUser)
CrudRoute.delete("/:id",DeleteUser)

export default CrudRoute