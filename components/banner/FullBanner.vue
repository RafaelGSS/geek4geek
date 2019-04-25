<template>
  <div class="banner-area">
    <div :class="{'src': isSrc, 'alt': isAlt}">
      <img :src="img.src" :alt="img.alt">
    </div>
  </div>
</template>

<style scoped>
.banner-area > img {
  width: 100%;
}
</style>

<script>
export default {
  props: {
    img: {
      type: Object,
      default: () => ({ src: "/img/banner/banner-80.jpg", alt: "banner" })
    },
    items: Array,
    orientation: {
      type: String,
      validator: val => ["src", "alt"].includes(val)
    }
  },
  computed: {
    isSrc() {
      return this.orientation == "src";
    },
    isAlt() {
      return this.orientation == "alt";
    }
  }
};
</script>
