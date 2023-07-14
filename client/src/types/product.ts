export type Product = {
    _id: string,
    title: string,
    price: number,
    image: string,
}
export type CartProduct = Product & {
    quantity: number
}
