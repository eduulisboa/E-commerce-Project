import {Request, Response} from 'express'

import Product from '../models/Product'
import { createProductService, deleteProductByIdServices, getProductByIdServices, getProductList, updateProductByIdServices } from '../services/products'

export const getAllProducts = async (request:Request, response: Response) => {
    try {
        const productList = await getProductList()
        response.status(200).json(productList)
    }
    catch (error) {
        response.status(500).json({error: error})
    }
}
export const getProductById = async (request:Request, response: Response) => {
    try {
        const productId = request.params.id
        const product = await getProductByIdServices(productId)
        response.status(200).json(product)
    }
    catch (error) {
        response.status(500).json({error: error})
    }
}

export const createProduct = async (request:Request, response: Response) => {
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
        response.status(500).json({error: error})
    }
}

export const updateProduct= async (request:Request, response: Response) => {
    try {
        const productId = request.params.id
        const newInformation = request.body
        const product = await updateProductByIdServices(productId, newInformation)
        response.status(200).json(product)
    }
    catch (error) {
        response.status(500).json({error: error})
    }
}

export const deleteProduct= async (request:Request, response: Response) => {
    try {
        const productId = request.params.id
        await deleteProductByIdServices(productId)
        response.status(204).send()
    }
    catch (error) {
        response.status(500).json({error: error})
    }
}

