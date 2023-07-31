import mongoose, { Document } from 'mongoose'

import { ProductDocument } from './Product'


export type ProductOrder = ProductDocument & {
    title: string,
    price: number,
    image: string,
    quantity: number,
  }


const ProductOrderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
  })

export type OrderDocument = Document & {
    createdAt: Date,
    products: ProductOrder[],
    userId: string,
}

const OrderSchema = new mongoose.Schema({
    createdAT:{
        type: Date,
        required: true,
        default: Date.now
    },
    products: [ProductOrderSchema] ,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    total: { type: Number }
})

export default mongoose.model<OrderDocument>("Order", OrderSchema)