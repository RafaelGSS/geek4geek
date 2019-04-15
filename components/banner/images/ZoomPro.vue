<template>
  <div>
    <div class="zoompro-border zoompro-span">
      <img
        class="zoompro"
        :src="principalImg.display_image"
        :data-zoom-image="principalImg.big_display_image"
        :alt="principalImg.alt"
      >
      <!-- <span v-if="pProduct.promo">-{{ pProduct.promotion.percentage }}%</span> -->
    </div>
    <div id="gallery" class="product-dec-slider">
      <a
        v-for="image in gallery"
        :key="image.id"
        :data-image="image.display_image"
        :data-zoom-image="image.big_display_image"
      >
        <img :src="image.low_display_image" :alt="image.alternate_text">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      principalImg: {
          type: Object
      },
      gallery: {
          type: Object
      },
  },
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/3.0.8/jquery.elevatezoom.min.js"
        }
      ]
    };
  },
  mounted() {
    $(".zoompro").elevateZoom({
      gallery: "gallery",
      responsive: true,
      galleryActiveClass: "active",
      zoomWindowWidth: 300,
      zoomWindowHeight: 100,
      scrollZoom: false,
      zoomType: "inner",
      cursor: "crosshair"
    });
  }
};
</script>

<style scoped>
</style>


