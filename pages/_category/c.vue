<template>
  <Page :categories="categories">
    <FullBanner />
    <ShopPageArea :products="products"/>
  </Page>
</template>

<script>
import Page from "~/components/Page";

import FullBanner from '~/components/Banner/FullBanner';
import ShopPageArea from "~/components/ShopArea/ShopPageArea";

import products from '~/api/categoryProducts';
import tags from '~/api/categoryTags';
import _categories from "~/api/categories";

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
          categories: _categories,
          tags: tags,
          products: products
        });
      }, 1500);
    });
  }
};
</script>


