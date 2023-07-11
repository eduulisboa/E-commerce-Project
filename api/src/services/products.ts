import Product, {ProductDocument} from "../models/Product";
import { NotFoundError } from "../helpers/apiError"

export const createProductService = async (product: ProductDocument): Promise<ProductDocument> => {
  return await product.save();
}

export const getProductList = async ():Promise<ProductDocument[]> => {
  return await Product.find().sort({ title: 1})
}

export const getProductByIdServices = async (
  productId:string
):Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)
  if(!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`)
  }
  return foundProduct
}

export const updateProductByIdServices = async (
  productId:string, newInformation: Partial <ProductDocument>
):Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, newInformation, {new: true})
  if(!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`)
  }
  return foundProduct
}

export const deleteProductByIdServices = async (
  productId:string
):Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndUpdate(productId)
  if(!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`)
  }
  return foundProduct

}
