<template>
  <div>
    <HeaderTop/>
    <HeaderMiddle/>
    <HeaderBottom/>
    <Slider/>
    <BannerArea/>
    <ProductArea/>
    <ServiceArea />
    <BestSellingArea />
    <div class="banner-area">
      <img src="/img/banner/banner-80.jpg" alt="">
    </div>
    <FooterTop/>
    <FooterBottom/>
  </div>
</template>

<script>
import HeaderTop from "~/components/HeaderTop.vue";
import HeaderMiddle from "~/components/HeaderMiddle.vue";
import HeaderBottom from "~/components/HeaderBottom.vue";
import Slider from "~/components/Slider.vue";
import BannerArea from "~/components/BannerArea.vue";
import ProductArea from "~/components/ProductArea.vue";
import FooterTop from "~/components/FooterTop.vue";
import ServiceArea from "~/components/ServiceArea.vue";
import BestSellingArea from "~/components/BestSellingArea.vue";
import FooterBottom from "~/components/FooterBottom.vue";

export default {
  components: {
    HeaderTop,
    FooterBottom,
    FooterTop,
    HeaderMiddle,
    HeaderBottom,
    Slider,
    BannerArea,
    ProductArea,
    ServiceArea,
    BestSellingArea
  }
};
</script>

<style scoped>
.banner-area > img {
    width: 100%;
}
</style>

