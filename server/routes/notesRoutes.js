import express from 'express';
import { addNote,getNotes,getOneNote,updateNote,deleteNote } from '../controller/noteController.js';
import handleAuth from '../middleware/auth.js';
export const noteRouter =express.Router();

//handlling notes CRUD
noteRouter.post('/note',handleAuth,addNote);
noteRouter.get('/note',handleAuth,getNotes);
noteRouter.get('/note/:id',handleAuth,getOneNote);
noteRouter.patch('/note/:id',handleAuth,updateNote);
noteRouter.delete('/note/:id',handleAuth,deleteNote);