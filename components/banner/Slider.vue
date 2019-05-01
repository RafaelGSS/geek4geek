<template>
  <div class="slider-area">
    <no-ssr>
      <carousel :items="1" :loop="1" :center="1" :autoplay="1" :autoplayHoverPause="1" :nav="0">
        <a :href="img.href" class="slider-active bg-img" v-for="img in imgs" :key="img.href">
          <img :src="img.src" :alt="img.alt" class="single-slider bg-img slider-height-22">
        </a>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [
        { src: "/img/slider/slider-51.jpg", alt: "slider", href: "#1" },
        { src: "/img/slider/slider-51.jpg", alt: "slider", href: "#2" }
      ], type: Object,
           validator: val => ['src', 'href', 'alt'].every(k => k in val)
    }
  }
};
</script>

<style scoped>
.slider-height-22 {
  min-height: 388px;
  max-height: 400px;
}

.slider-active.owl-carousel .owl-item .slider-img img {
  width: 100%;
}
</style>

<style>
.owl-theme .owl-dots .active span {
  background: #000 !important;
}
</style>
