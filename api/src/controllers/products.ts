import {NextFunction, Request, Response} from 'express'

import Product from '../models/Product'
import { createProductService, getProductByIdServices, getProductList } from '../services/products'

export const getAllProducts = async (request:Request, response: Response, next:NextFunction) => {
    try {
        const productList = await getProductList()
        response.status(200).json(productList)
    }
    catch (error) {
        next(error)
    }
}
export const getProductById = async (request:Request, response: Response, next:NextFunction) => {
    try {
        const productId = request.params.id
        const product = await getProductByIdServices(productId)
        response.status(200).json(product)
    }
    catch (error) {
        next(error)
    }
}

export const createProduct = async (request:Request, response: Response, next:NextFunction) => {
    const {title, price, image} = request.body
    const productInformation = new Product({
        title: title,
        price: price,
        image: image
    })
    try {
        const product = await createProductService(productInformation)
        response.status(201).json(product)
    }
    catch (error) {
        next(error)
    }
}
