<template>
  <div>
    <div class="zoompro-border zoompro-span">
      <img
        class="zoompro"
        :src="principalImg.display_image"
        :data-zoom-image="principalImg.big_display_image"
        :alt="principalImg.alt"
      >
      <slot></slot>
    </div>
    <div id="gallery" class="product-dec-slider">
      <a
        v-for="image in gallery"
        :key="`gallery-zoom-${image.id}`"
        :data-image="image.display_image"
        :data-zoom-image="image.big_display_image"
      >
        <img :src="image.low_display_image" :alt="image.alt">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    principalImg: {
      type: Object // { id: "", display_image: "", big_display_image: "", low_display_image: "", alt: ""}
    },
    gallery: {
      type: Array // [{ id: "", display_image: "", big_display_image: "", low_display_image: "", alt: ""}]
    }
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
.zoompro-border {
  border: 1px solid #ebebeb;
}

.zoompro {
  width: 100%;
}

.product-dec-slider {
  text-align: center;
}
.product-dec-slider a {
  padding: 0 5px;
  cursor: pointer;
}
.product-dec-slider a img {
  border: 2px solid transparent;
  cursor: pointer;
}
.product-dec-slider a.active img {
  border: 2px solid #ebebeb;
}

.zoompro-span {
  position: relative;
}
.zoompro-span > span {
  background-color: #3cb371;
  border-radius: 3px;
  color: #fff;
  left: 30px;
  line-height: 1;
  padding: 6px 14px 5px;
  position: absolute;
  top: 20px;
  z-index: 99;
}
</style>
