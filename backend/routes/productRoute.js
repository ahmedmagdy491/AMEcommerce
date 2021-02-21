import express from 'express';
import asyncHandler from 'express-async-handler';
import { getProducts, getSingleProductById } from '../controllers/productController.js';
const router = express.Router();



router.get(
	'/',
	getProducts	
);

router.get(
	'/:id',
	getSingleProductById
);

export default router;
