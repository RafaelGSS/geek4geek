<template>
  <!-- Component image link with effect css of transition -->
  <div class="banner-img banner-hover mb-30">
    <nuxt-link :to="href">
      <img :src="src" :alt="alt" :height="height">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    src: String,
    height: {
      type: Number,
      default: 251
    },
    alt: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.banner-img img {
  width: 100%;
}
.banner-hover {
  position: relative;
}
.banner-hover::before,
.banner-hover::after {
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.5s ease 0s;
  z-index: 1;
}
.banner-hover:hover::after {
  background-color: rgba(255, 255, 255, 0.3);
  bottom: 50%;
  top: 50%;
}
.banner-hover:hover::before {
  background-color: rgba(255, 255, 255, 0.3);
  left: 50%;
  right: 50%;
}
</style>
