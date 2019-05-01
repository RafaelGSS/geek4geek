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

import images from "@/api/imagesSlider";

/**
 * GraphQL Queries
 */
import ProductsHot from "@/apollo/queries/products/ProductsHot";
import ProductsNew from "@/apollo/queries/products/ProductsNew";

import BestSellingShirts from "@/apollo/queries/products/BestSellingShirts";
import BestSellingCups from "@/apollo/queries/products/BestSellingCups";

import Categories from "@/apollo/queries/categories/Category";

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
          images_slider: images,
          // sellingShirts: bestSellingShirts,
          // sellingCups: bestSellingCups
        });
      });
    });
  },
  apollo: {
    products_hot: {
      prefetch: true,
      query: ProductsHot,
      update: data => data.products.records
    },
    products_new: {
      prefetch: true,
      query: ProductsNew,
      update: data => data.products.records
    },
    categories: {
      prefetch: true,
      query: Categories,
      update: data => data.categories.records
    },
    sellingShirts: {
      prefetch: true,
      query: BestSellingShirts,
      update: data => data.products.records
    },
    sellingCups: {
      prefetch: true,
      query: BestSellingCups,
      update: data => data.products.records
    }
  }
};
</script>


