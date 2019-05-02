<template>
  <page>
    <full-banner/>
    <div v-show="products != null">
      <shop-page-area :products="products"/>
    </div>
  </page>
</template>

<script>
import Page from "@/components/Page";

import FullBanner from "@/components/banner/FullBanner";
import ShopPageArea from "@/components/shop-area/ShopPageArea";

/**
 * GraphQL Queries
 */

import ProductsFromCategory from "@/apollo/queries/categories/ProductsFromCategory";

import products from "@/api/categoryProducts";
import tags from "@/api/categoryTags";
import _categories from "@/api/categories";

export default {
  components: {
    Page,
    ShopPageArea,
    FullBanner
  },
  data: function() {
    return {
      category: this.$route.params.category
    };
  },
  head() {
    return {
      title: `Categoria ${this.category}`
    };
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          categories: _categories,
          tags: tags
        });
      }, 1500);
    });
  },
  apollo: {
    products: {
      prefetch: true,
      query: ProductsFromCategory,
      update: data => data.category.products
    }
  }
};
</script>


