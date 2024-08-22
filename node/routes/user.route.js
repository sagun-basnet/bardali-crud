import express from 'express';
import { createUser, deleteUser, getAllUsers, updateUsers } from '../controller/user.controller.js';

const router = express.Router();

router.post('/user', createUser)
router.get('/getAllUsers', getAllUsers)
router.put('/updateUser/:id', updateUsers)
router.delete('/deleteUser/:id', deleteUser)

export default router;