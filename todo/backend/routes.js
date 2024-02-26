import { Router } from 'express';
import { createTodo, deleteTodo, getAllTodos } from './controller.js';

const router = Router();

router.post('/todo', createTodo);
router.delete('/todos/:id', deleteTodo);
router.get('/getall', getAllTodos);
export default router;
