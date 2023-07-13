export type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
}
export type CartProduct = Product & {
    quantity: number
}
