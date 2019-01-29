interface Promotion {
    percentage: number,
    old_price: number
}

interface Product {
    id: number,
    name: string,
    category_name: string,
    display_description: string,
    promo: boolean,
    promotion: Promotion,
    price: number,
    tags: Array<string>
}