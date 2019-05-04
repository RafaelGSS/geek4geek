<template>
  <page>
    <no-ssr>
      <vue-element-loading :active="!this.loaded" is-full-screen>
        <img src="/gif/pikachu-loading.gif">
      </vue-element-loading>
    </no-ssr>
    <div v-if="this.loaded">
      <slider :imgs="imgSlider"/>
      <banner-area
        :img1="this.bannerArea.img1"
        :img2="this.bannerArea.img2"
        :img3="this.bannerArea.img3"
      />
      <product-area :products_new="products_new" :products_hot="products_hot"/>
      <service-area />
      <best-selling-area :cups="sellingCups" :tshirts="sellingShirts"/>
    </div>
    <full-banner src="/img/banner/banner-80.jpg" alt="Banner Index" />
  </page>
</template>

<script>
import isLoading from "@/mixins/isLoading";

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
  mixins: [isLoading],
  head: {
    title: "Homepage dos Geeks!"
  },
  data: () => ({
    imgSlider: [
      { src: "/img/slider/slider-51.jpg", alt: "slider", href: "#1" },
      { src: "/img/slider/slider-51.jpg", alt: "slider", href: "#2" }
    ],
    bannerArea: {
      img1: { href: "#3", src: "/img/banner/banner-76.jpg", alt: "banner76" },
      img2: { href: "#3", src: "/img/banner/banner-77.jpg", alt: "banner77" },
      img3: { href: "#3", src: "/img/banner/banner-78.jpg", alt: "banner78" }
    },
    fullBanner: ''
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
