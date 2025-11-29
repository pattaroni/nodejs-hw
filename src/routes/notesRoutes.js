import { Router } from 'express';
import {
  getNotes,
  getNoteById,
  getError,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getNoteById);

router.get('/test-error', getError);

router.post('/notes', createNote);

router.delete('/notes/:noteId', deleteNote);

router.patch('/notes/:noteId', updateNote);

export default router;
