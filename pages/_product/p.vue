<template>
  <div>
    <header>
        <HeaderTop/>
        <HeaderMiddle/>
        <HeaderBottom :categories="categories"/>
    </header>
    <ProductDetails :categories="categories" :pProduct="product" :tags="tags"/>
    <DescriptionReview :reviews="reviews" :full_description="product.full_description"/>
    <BannerArea />
    <div class="banner-area">
      <img src="/img/banner/banner-80.jpg" alt="">
    </div>
    <footer>
        <FooterTop/>
        <FooterBottom/>
    </footer>
  </div>
</template>

<script>
import ProductDetails from "~/components/ProductDetails";
import BannerArea from "~/components/BannerArea";
import DescriptionReview from "~/components/DescriptionReview";
import HeaderTop from "~/components/HeaderTop";
import HeaderMiddle from "~/components/HeaderMiddle";
import HeaderBottom from "~/components/HeaderBottom";
import FooterTop from "~/components/FooterTop";
import FooterBottom from "~/components/FooterBottom";

export default {
    components: {
        ProductDetails,
        HeaderTop,
        HeaderMiddle,
        HeaderBottom,
        DescriptionReview,
        FooterTop,
        FooterBottom,
        BannerArea
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

<style scoped>
footer {
    background: #282829;
}
.banner-area > img {
    width: 100%;
}
</style>


