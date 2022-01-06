import { Router } from "express";
import { getTasks, getTasksCount, getTask, saveTask, deleteTask, updateTask} from "../controllers/tasks"
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tareas
 *  description: Endpoints de tareas
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Listar Tareas
 *      tags: [Tareas]
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Cantidad Tareas
 *      tags: [Tareas]
 */
router.get('/tasks/count', getTasksCount);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *      summary: buscar Tarea
 *      tags: [Tareas]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Crear Tarea
 *      tags: [Tareas]
 */
router.post('/tasks',saveTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *      summary: Eliminar Tarea
 *      tags: [Tareas]
 */
router.delete('/tasks/:id',deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *      summary: Editar Tarea
 *      tags: [Tareas]
 */
router.put('/tasks/:id', updateTask);

export default router;