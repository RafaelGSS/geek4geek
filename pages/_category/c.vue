<template>
  <Page>
    <div class="banner-area">
      <img src="/img/banner/banner-80.jpg" alt>
    </div>
    <ShopPageArea :products="products"/>
  </Page>
</template>

<script>
import Page from "~/components/Page";

import ShopPageArea from "~/components/ShopArea/ShopPageArea";

export default {
  components: {
    Page,
    ShopPageArea
  },
  head() {
    return {
      title: "Categoria " + this.$route.params.category
    };
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          categories: [
            {
              id: 1,
              name: "Camisetas"
            }
          ],
          tags: [],
          products: [
            {
              id: 95,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 92,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 91,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 44,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 45,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 46,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 47,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 48,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2", "Tag3"]
            },
            {
              id: 49,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2", "Tag3"]
            },
            {
              id: 410,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 90,
              tags: ["Tag1", "Tag2", "Tag3"]
            }
          ]
        });
      }, 1500);
    });
  }
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


