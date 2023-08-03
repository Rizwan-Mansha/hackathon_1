import { StaticImageData } from "next/image"

export type product ={
    id: number,
    name: string,
    price: number,
    category: string,
    image: string | StaticImageData
}
