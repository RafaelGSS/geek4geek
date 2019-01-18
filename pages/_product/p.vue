<template>
    <div>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
        <ProductDetails :categories=categories :pProduct=product :tags=tags />
    </div>
</template>

<script>
import ProductDetails from '~/components/ProductDetails'
import HeaderTop from '~/components/HeaderTop'
import HeaderMiddle from '~/components/HeaderMiddle'
import HeaderBottom from '~/components/HeaderBottom'

export default {
    head() {
        return {
            title: 'Produto ' + this.$route.params.product
        }
    },
    asyncData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    product: {
                        id: 1,
                        display_name: 'Produto Geek4Geek',
                        full_name: 'Produto Full name Geek4Geek',
                        unique_name: 'prod-geek4geek',
                        display_description: 'Descricao curta do produto Geek4Geek',
                        full_description: 'Descricao Longa do produto Geek4Geek',
                        price: 10.15,
                        stock: 11,
                        images: [
                            {
                                display_image: '/img/product-details/product-detalis-l1.jpg',
                                low_display_image: '/img/product-details/product-detalis-s1.jpg',
                                big_display_image: '/img/product-details/product-detalis-bl1.jpg',
                            },
                        ],
                        promotion: {
                            enabled: true,
                            percentage: 10
                        }
                    },
                    reviews:[
                        {

                        },
                        {

                        }
                    ],
                    categories:[
                        {
                            id: 1,
                            name: 'Camisetas'
                        }
                    ],
                    tags:[

                    ]
                })
            }, 1500)
        })
    },
    components: {
        ProductDetails, HeaderTop, HeaderMiddle, HeaderBottom
    },
}
</script>

<style scoped>

</style>


