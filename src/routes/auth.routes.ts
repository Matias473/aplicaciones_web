import { Router } from "express";
import { getAllUser, getTime, login, updateTime, getByUsername, createUser } from "../controllers/auth.controller";

const router = Router();

// Ruta para login
router.post('/login-user', login);

// Ruta para obtener tiempo restante del token
router.get('/getTime/:userId', getTime);

// Ruta para actualizar el tiempo del token
router.put('/updateTime', updateTime);

router.get('/users', getAllUser);

router.get('/users/:username', getByUsername);

router.post('/users', createUser);

export default router;