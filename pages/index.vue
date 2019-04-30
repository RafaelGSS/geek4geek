<template>
  <Page :categories="categories">
    <Slider :imgs="images_slider"/>
    <BannerArea/>
    <ProductArea :products_new="products_new" :products_hot="products_hot"/>
    <ServiceArea/>
    <BestSellingArea :cups="sellingCups" :tshirts="sellingShirts"/>
    <FullBanner/>
  </Page>
</template>

<script>
import Page from "@/components/Page";

import Slider from "@/components/banner/Slider";
import BannerArea from "@/components/banner/BannerArea";
import FullBanner from "@/components/banner/FullBanner";
import ServiceArea from "@/components/banner/ServiceArea";

import ProductArea from "@/components/shop-area/ProductArea";
import BestSellingArea from "@/components/shop-area/BestSellingArea";

/**
 * Simulating API
 */

import _categories from "@/api/categories";
import images from "@/api/imagesSlider";

import bestSellingShirts from "@/api/bestSellingShirts";
import bestSellingCups from "@/api/bestSellingCups";

/**
 * GraphQL Queries
 */
import productsHot from "@/apollo/queries/product/productHot";
import productsNew from "@/apollo/queries/product/productNew";

export default {
  head: {
    title: "Homepage dos Geeks!"
  },
  components: {
    Page,
    Slider,
    BannerArea,
    ProductArea,
    FullBanner,
    ServiceArea,
    BestSellingArea
  },
  asyncData({ app }) {
    // let client = app.apolloProvider.defaultClient
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          categories: _categories,
          images_slider: images,
          sellingShirts: bestSellingShirts,
          sellingCups: bestSellingCups
        });
      }, 1500);
    });
  },
  apollo: {
    products_hot: {
      prefetch: true,
      query: productsHot,
      update: data => data.products.records
    },
    products_new: {
      prefetch: true,
      query: productsNew,
      update: data => data.products.records
    }
  },
};
</script>


