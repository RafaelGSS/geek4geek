interface Promotion {
    percentage: number,
    old_price: number
}

interface images {
    src: String,
    alt: String
}

interface Product {
    id: number,
    name: string,
    categories: Array<string>,
    display_description: string,
    promo: boolean,
    promotion: Promotion,
    price: number,
    images: Array<images>,
    tags: Array<string>,
    material: string
}