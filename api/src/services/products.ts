import Product, {ProductDocument} from "../models/Product";

export const createProductService = async (product: ProductDocument): Promise<ProductDocument | undefined> => {
  try {
    return product.save();
  }
  catch (error) {
    console.log(error)
  }

}

export const getProductList = async ():Promise<ProductDocument[] | undefined > => {
  try {
    return Product.find().sort({ title: 1})
  } catch (error) {
    console.log(error)
  }
}
export const getProductByIdServices = async (
  productId:string
):Promise<ProductDocument | undefined | null > => {
  try {
    const foundProduct = await Product.findById(productId)
    if(!foundProduct) {
      console.log("can't find")
    }
    return foundProduct
  } catch (error) {
    console.log(error)
  }
}

export const updateProductByIdServices = async (
  productId:string, newInformation: Partial <ProductDocument>
):Promise<ProductDocument | undefined | null > => {
  try {
    const foundProduct = await Product.findByIdAndUpdate(productId, newInformation, {new: true})
    if(!foundProduct) {
      console.log("can't find")
    }
    return foundProduct
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductByIdServices = async (
  productId:string
):Promise<ProductDocument | undefined | null > => {
  try {
    const foundProduct = await Product.findByIdAndUpdate(productId, {new: true})
    if(!foundProduct) {
      console.log("can't find")
    }
    return foundProduct
  } catch (error) {
    console.log(error)
  }
}
