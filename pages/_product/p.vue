<template>
  <page>
    <no-ssr>
      <vue-element-loading :active="!this.loaded" is-full-screen>
        <img src="/gif/pikachu-loading.gif">
      </vue-element-loading>
    </no-ssr>
    <div v-if="this.loaded">
      <product-details :product="product"/>
      <product-content :reviews="product.reviews" :full_description="product.full_description"/>
    </div>
    <full-banner src="/img/banner/banner-80.jpg" alt="Banner Index"/>
    <banner-transition-area/>
  </page>
</template>

<script>
import isLoading from "@/mixins/isLoading";

import Page from "@/components/Page";

import BannerTransitionArea from "@/components/banner/BannerTransitionArea";
import FullBanner from "@/components/banner/FullBanner";

import ProductContent from "@/components/product-details/ProductContent";
import ProductDetails from "@/components/product-details/ProductDetails";

/**
 * GraphQL Queries
 */
import ProductByUniqueName from "@/apollo/queries/products/ProductByUniqueName";

export default {
  mixins: [isLoading],
  components: {
    Page,
    ProductDetails,
    ProductContent,
    BannerTransitionArea,
    FullBanner
  },
  head() {
    return {
      title: "Produto " + this.uniqueName
    };
  },
  data: function() {
    return {
      uniqueName: this.$route.params.product
    };
  },
  apollo: {
    product: {
      query: ProductByUniqueName,
      variables() {
        return { uniqueName: this.uniqueName };
      }
    }
  }
};
</script>

