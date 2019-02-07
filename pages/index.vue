<template>
  <Page :categories="categories">
    <Slider :imgs="images_slider"/>
    <BannerArea/>
    <ProductArea :products_new="products_new" :products_hot="products_hot"/>
    <ServiceArea/>
    <BestSellingArea :cups="sellingCups" :tshirts="sellingShirts" />
    <FullBanner/>
  </Page>
</template>

<script>
import Page from "~/components/Page";

import Slider from "~/components/Banner/Slider";
import BannerArea from "~/components/Banner/BannerArea";
import FullBanner from "~/components/Banner/FullBanner";
import ServiceArea from "~/components/Banner/ServiceArea";

import ProductArea from "~/components/ShopArea/ProductArea";
import BestSellingArea from "~/components/ShopArea/BestSellingArea";

/**
 * Simulating API
 */

import productsNew from "~/api/productsNew";
import productsHot from "~/api/productsHot";
import { categories as _categories } from "~/api/categories";
import images from "~/api/imagesSlider";

import bestSellingShirts from "~/api/bestSellingShirts";
import bestSellingCups from "~/api/bestSellingCups";

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
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          categories: _categories,
          products_new: productsNew,
          products_hot: productsHot,
          images_slider: images,
          sellingShirts: bestSellingShirts,
          sellingCups: bestSellingCups
        });
      }, 1500);
    });
  },
};
</script>


