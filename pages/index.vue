<template>
  <page>
    <div v-if="$apollo.loading">
      <vue-simple-spinner size="large" message="Carregando dados..."></vue-simple-spinner>
    </div>
    <div v-else>
      <slider :imgs="imgSlider"/>
      <banner-area/>
      <product-area :products_new="products_new" :products_hot="products_hot"/>
      <service-area/>
      <best-selling-area :cups="sellingCups" :tshirts="sellingShirts"/>
      <full-banner/>
    </div>
  </page>
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
 * GraphQL Queries
 */
import ProductsHot from "@/apollo/queries/products/ProductsHot";
import ProductsNew from "@/apollo/queries/products/ProductsNew";

import BestSellingShirts from "@/apollo/queries/products/BestSellingShirts";
import BestSellingCups from "@/apollo/queries/products/BestSellingCups";

export default {
  head: {
    title: "Homepage dos Geeks!"
  },
  data: () => ({
    imgSlider: [
      { src: "/img/slider/slider-51.jpg", alt: "slider", href: "#1" },
      { src: "/img/slider/slider-51.jpg", alt: "slider", href: "#2" }
    ]
  }),
  components: {
    Page,
    Slider,
    BannerArea,
    ProductArea,
    FullBanner,
    ServiceArea,
    BestSellingArea
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


