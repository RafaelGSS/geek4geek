<template>
  <Page>
    <FullBanner />
    <ShopPageArea :products="products"/>
  </Page>
</template>

<script>
import Page from "~/components/Page";

import FullBanner from '~/components/Banner/FullBanner';
import ShopPageArea from "~/components/ShopArea/ShopPageArea";

export default {
  scrollToTop: false,
  components: {
    Page,
    ShopPageArea,
    FullBanner
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
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 966,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 92,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 92,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 91,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 93,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 44,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 94,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 45,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 95,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 46,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 96,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 47,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 97,
              tags: ["Tag1", "Tag2"]
            },
            {
              id: 48,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 98,
              tags: ["Tag1", "Tag2", "Tag3"]
            },
            {
              id: 49,
              name: "Produto Gee4Geek",
              category_name: "Canecas",
              display_description: "Descricao dos protudos em modo de display",
              material: 'PVC',
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
              material: 'PVC',
              promo: true,
              promotion: {
                percentage: 10,
                old_price: 100
              },
              price: 99,
              tags: ["Tag1", "Tag2", "Tag3"]
            }
          ]
        });
      }, 1500);
    });
  }
};
</script>


