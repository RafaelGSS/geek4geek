<template>
  <div class="slider-area">
    <no-ssr>
      <carousel :items="1" :loop="1" :center="1" :autoplay="1" :autoplayHoverPause="1" :nav="0">
        <a :href="img.href" class="slider-active bg-img" v-for="img in imgs" :key="img.href">
          <img :src="img.src" :alt="img.alt" class="single-slider bg-img slider-height">
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
        { src: "/img/banner/banner-geek.jpg", alt: "Banner Geek 1", href: "#1" },
        { src: "/img/banner/banner-black.png", alt: "Banner Geek 2", href: "#2" }
      ]
    }
  }
};
</script>

<style scoped>
.bg-img {
  background-position: center center;
  background-size: cover;
}

.slider-height {
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
