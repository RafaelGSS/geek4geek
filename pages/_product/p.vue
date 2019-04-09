<template>
  <Page>
    <ProductDetails :pProduct="product"/>
    <DescriptionReview :reviews="reviews" :full_description="product.full_description"/>
    <BannerArea />
    <FullBanner />
  </Page>
</template>

<script>
import Page from "~/components/Page";

import ProductDetails from "~/components/ProductDetails/ProductDetails";

import BannerArea from "~/components/banner/BannerArea";
import FullBanner from "~/components/banner/FullBanner";

import DescriptionReview from "~/components/ProductDetails/DescriptionReview";


/**
 * Simulating API
 */

import product from "~/api/product";
import productReview from "~/api/productReviews";

export default {
    components: {
        Page,
        ProductDetails,
        DescriptionReview,
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
        });
      }, 1500);
    });
  },
  mounted(){
    setTimeout(() => {
      this.reviews = productReview
      console.log('entrou', this.reviews)
    }, 10000)
  }
};
</script>

