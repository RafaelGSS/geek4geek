<template>
  <page>
    <div v-if="$apollo.loading == 0">
      <product-details :product="product"/>
      <product-content :reviews="product.reviews" :full_description="product.full_description"/>
    </div>
    <div v-else>
      <vue-simple-spinner size="large" message="Carregando dados..."></vue-simple-spinner>
    </div>
    <full-banner/>
    <banner-area/>
  </page>
</template>

<script>
import Page from "@/components/Page";

import ProductDetails from "@/components/product-details/ProductDetails";

import BannerArea from "@/components/banner/BannerArea";
import FullBanner from "@/components/banner/FullBanner";

import ProductContent from "@/components/product-details/ProductContent";

/**
 * GraphQL Queries
 */

import ProductByUniqueName from "@/apollo/queries/products/ProductByUniqueName";

export default {
  components: {
    Page,
    ProductDetails,
    ProductContent,
    BannerArea,
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

