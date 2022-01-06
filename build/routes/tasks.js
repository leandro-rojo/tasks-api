"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
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

router.get('/tasks', _tasks.getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Cantidad Tareas
 *      tags: [Tareas]
 */

router.get('/tasks/count', _tasks.getTasksCount);
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *      summary: buscar Tarea
 *      tags: [Tareas]
 */

router.get('/tasks/:id', _tasks.getTask);
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Crear Tarea
 *      tags: [Tareas]
 */

router.post('/tasks', _tasks.saveTask);
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *      summary: Eliminar Tarea
 *      tags: [Tareas]
 */

router["delete"]('/tasks/:id', _tasks.deleteTask);
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *      summary: Editar Tarea
 *      tags: [Tareas]
 */

router.put('/tasks/:id', _tasks.updateTask);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=tasks.js.map