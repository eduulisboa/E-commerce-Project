import {Router} from "express"
import { createProduct, getAllProducts, getProductById} from "../controllers/products"

const productRouter = Router()

productRouter.get("/", getAllProducts)
productRouter.get("/:id", getProductById)
productRouter.post("/", createProduct);


export default productRouter
