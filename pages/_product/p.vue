<template>
  <page>
    <product-details :product="product"/>
    <product-content :reviews="reviews" :full_description="product.full_description"/>
    <banner-area/>
    <full-banner/>
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

import product from "@/api/product";
import productReview from "@/api/productReviews";

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
      reviews: [],
      uniqueName: this.$route.params.product
    };
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          product: product,
          reviews: productReview
        });
      }, 1500);
    });
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

