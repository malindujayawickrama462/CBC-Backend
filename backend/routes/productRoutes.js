import express from 'express';
import { deleteProduct, getProducts, saveProduct, updateProduct, getProductById } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/",getProducts);
productRouter.post("/add",saveProduct);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId", getProductById);

export default productRouter;