<template>
  <Page>
    <ProductDetails :pProduct="product"/>
    <ProductContent :reviews="reviews" :full_description="product.full_description"/>
    <BannerArea />
    <FullBanner />
  </Page>
</template>

<script>
import Page from "~/components/Page";

import ProductDetails from "~/components/product-details/ProductDetails";

import BannerArea from "~/components/banner/BannerArea";
import FullBanner from "~/components/banner/FullBanner";

import ProductContent from "~/components/product-details/ProductContent";


/**
 * Simulating API
 */

import product from "~/api/product";
import productReview from "~/api/productReviews";

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
      title: "Produto " + this.$route.params.product,
    };
  },
  data: () => ({
    reviews: []
  }),
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          product: product,
          reviews: productReview
        });
      }, 1500);
    });
  }
};
</script>

