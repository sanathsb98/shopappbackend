import express from 'express';
import { addProduct, getAllProducts } from '../controllers/product-controller.js'; // Note the added .js extension

const router = express.Router();

router.get("/", getAllProducts);
router.post("/addProduct",addProduct)
export default router;
