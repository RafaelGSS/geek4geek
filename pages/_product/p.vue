<template>
  <page>
    <no-ssr>
      <vue-element-loading :active="!this.loaded" is-full-screen>
        <img src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif">
      </vue-element-loading>
    </no-ssr>
    <div v-if="this.loaded">
      <product-details :product="product"/>
      <product-content :reviews="product.reviews" :full_description="product.full_description"/>
    </div>
    <full-banner/>
    <banner-area/>
  </page>
</template>

<script>
import isLoading from "@/mixins/isLoading";

import Page from "@/components/Page";

import BannerArea from "@/components/banner/BannerArea";
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
    BannerArea,
    FullBanner
  },
  head() {
    return {
      title: "Produto " + this.uniqueName,
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/3.0.8/jquery.elevatezoom.min.js",
          ssr: true
        }
      ]
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

