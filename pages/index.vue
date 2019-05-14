<template>
  <page>
    <no-ssr>
      <vue-element-loading :active="!this.loaded" is-full-screen>
        <img src="/gif/pikachu-loading.gif">
      </vue-element-loading>
    </no-ssr>
    <div v-if="this.loaded">
      <slider/>
      <banner-transition-area/>
      <product-area :products_new="products_new" :products_hot="products_hot"/>
      <service-area/>
      <best-selling-area :cups="sellingCups" :tshirts="sellingShirts"/>
    </div>
    <full-banner src="/img/banner/banner-80.jpg" alt="Banner Index"/>
  </page>
</template>

<script>
import isLoading from "@/mixins/isLoading";

import Page from "@/components/Page";

import Slider from "@/components/banner/Slider";
import BannerTransitionArea from "@/components/banner/BannerTransitionArea";
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
  mixins: [isLoading],
  head: {
    title: "Homepage dos Geeks!"
  },
  components: {
    Page,
    Slider,
    BannerTransitionArea,
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
