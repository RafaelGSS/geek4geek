<template>
  <Page>
    <ProductDetails :categories="categories" :pProduct="product" :tags="tags"/>
    <DescriptionReview :reviews="reviews" :full_description="product.full_description"/>
    <BannerArea />
    <FullBanner />
  </Page>
</template>

<script>
import Page from "~/components/Page";

import ProductDetails from "~/components/ProductDetails/ProductDetails";

import BannerArea from "~/components/Banner/BannerArea";
import FullBanner from "~/components/Banner/FullBanner";

import DescriptionReview from "~/components/ProductDetails/DescriptionReview";

export default {
    components: {
        Page,
        ProductDetails,
        DescriptionReview,
        BannerArea,
        FullBanner
  },
  head() {
    return {
      title: "Produto " + this.$route.params.product
    };
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          product: {
            id: 1,
            display_name: "Produto Geek4Geek",
            full_name: "Produto Full name Geek4Geek",
            unique_name: "prod-geek4geek",
            display_description: "Descricao curta do produto Geek4Geek",
            full_description: "Descricao Longa do produto Geek4Geek",
            price: 10.15,
            stock: 11,
            images: [
              {
                display_image: "/img/product-details/product-detalis-l1.jpg",
                low_display_image:
                  "/img/product-details/product-detalis-s1.jpg",
                big_display_image:
                  "/img/product-details/product-detalis-bl1.jpg"
              }
            ],
            promotion: {
              enabled: true,
              percentage: 10
            }
          },
          reviews: [
            {
              id: 1,
              author: "Itamar Alves",
              review: "Lindo produto de um excelente review da Geek4Geek",
              review_star: 4,
              created_at: "2018-10-15"
            },
            {
              id: 2,
              author: "Itamar Alves",
              review: "Lindo produto de um excelente review da Geek4Geek",
              review_star: 2,
              created_at: "2018-10-14"
            }
          ],
          categories: [
            {
              id: 1,
              name: "Camisetas"
            }
          ],
          tags: []
        });
      }, 1500);
    });
  },
};
</script>

