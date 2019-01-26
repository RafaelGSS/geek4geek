<template>
  <Page>    
    <Slider/>
    <BannerArea/>
    <ProductArea :products_new=products_new :products_hot=products_hot />
    <ServiceArea />
    <BestSellingArea />
    <div class="banner-area">
      <img src="/img/banner/banner-80.jpg" alt="">
    </div>
  </Page>
</template>

<script>
import Page from "~/components/Page";

import Slider from "~/components/Banner/Slider.vue";
import BannerArea from "~/components/Banner/BannerArea.vue";
import ServiceArea from "~/components/Banner/ServiceArea.vue";

import ProductArea from "~/components/ShopArea/ProductArea.vue";
import BestSellingArea from "~/components/ShopArea/BestSellingArea.vue";

export default {
  head: {
    title: 'Homepage dos Geeks!'
  },
  components: {
    Page,
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
          products_new: [
            {
              id: 95,
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
              id: 92,
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
              id: 91,
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
              id: 44,
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
              id: 45,
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
              id: 46,
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
              id: 47,
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
              id: 48,
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
              id: 49,
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
              id: 410,
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
              id: 41,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 62,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 63,
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
              id: 65,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 66,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 67,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 68,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 69,
              name: 'Produto Gee4Geek',
              category_name: 'Canecas',
              display_description: 'Descricao dos protudos em modo de display',
              promo: false,
              price: 90,
            },
            {
              id: 710,
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
};

</script>

<style scoped>
.banner-area > img {
    width: 100%;
}
</style>

