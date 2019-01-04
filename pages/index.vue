<template>
  <div>
    <HeaderTop/>
    <HeaderMiddle/>
    <HeaderBottom :categories=categories :shoptypes=shoptypes />
    <Slider/>
    <BannerArea/>
    <ProductArea :products_new=products_new :products_hot=products_hot />
    <ServiceArea />
    <BestSellingArea />
    <div class="banner-area">
      <img src="/img/banner/banner-80.jpg" alt="">
    </div>
    <FooterTop/>
    <FooterBottom/>
  </div>
</template>

<script>
import HeaderTop from "~/components/HeaderTop.vue";
import HeaderMiddle from "~/components/HeaderMiddle.vue";
import HeaderBottom from "~/components/HeaderBottom.vue";
import Slider from "~/components/Slider.vue";
import BannerArea from "~/components/BannerArea.vue";
import ProductArea from "~/components/ProductArea.vue";
import FooterTop from "~/components/FooterTop.vue";
import ServiceArea from "~/components/ServiceArea.vue";
import BestSellingArea from "~/components/BestSellingArea.vue";
import FooterBottom from "~/components/FooterBottom.vue";

export default {
  components: {
    HeaderTop,
    FooterBottom,
    FooterTop,
    HeaderMiddle,
    HeaderBottom,
    Slider,
    BannerArea,
    ProductArea,
    ServiceArea,
    BestSellingArea
  },
  data: () => ({
    categories: {},
    shoptypes: {}
  }),
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          categories: [
            {
              id: 1,
              name: 'Canecas'
            },
            {
              id: 2,
              name: 'Camisetas'
            },
            {
              id: 3,
              name: 'Action Figures'
            }
          ],
          shoptypes: [
            {
              id: 1,
              name: 'Para sua casa',
              subcategories: [
                {
                  id: 1,
                  name: 'Almofadas',
                  new: false
                },
                {
                  id: 2,
                  name: 'Action Figures',
                  new: false
                }
              ]
            },
            {
              id: 1,
              name: 'Promocões',
              subcategories: [
                {
                  id: 1,
                  name: 'Camisetas Marvel',
                  new: true
                },
                {
                  id: 2,
                  name: 'Camisetas DC',
                  new: true
                }
              ]
            },
          ],
          products_new: [
            {
              id: 1,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 2,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 3,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 4,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 5,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 6,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 7,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 8,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 9,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
            {
              id: 10,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
            },
          ],
          products_hot: [
            {
              id: 1,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 2,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 3,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 4,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 5,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 6,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 7,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 8,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 9,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 10,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
          ]
        })
      }, 1500)
    });
  },
  head: {
    title: 'Homepage dos Geeks!'
  }
};

</script>

<style scoped>
.banner-area > img {
    width: 100%;
}
</style>

