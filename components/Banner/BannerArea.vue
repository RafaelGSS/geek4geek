<template>
  <div class="banner-area pt-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <div class="banner-img banner-hover mb-30">
            <a href="#">
              <img :src="img1.src" :alt="img1.alt">
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="banner-img banner-hover mb-30">
            <a href="#">
              <img :src="img2.src" :alt="img2.alt">
            </a>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="banner-img banner-hover mb-30">
            <a href="#">
              <img :src="img3.src" :alt="img3.alt">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-img img {
    width: 100%;
}
.banner-negative-mrg-2 {
    margin-top: -1px;
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

<script>
export default {
  props: {
    img1: {
      type: Object,
      default: function(){ return {src: '/img/banner/banner-76.jpg', alt: 'banner76'}}
    },
    img2: {
      type: Object,
      default: function(){ return {src: '/img/banner/banner-77.jpg', alt: 'banner77'}}
    },
    img3: {
      type: Object,
      default: function(){ return {src: '/img/banner/banner-78.jpg', alt: 'banner78'}}
    }
  }
};
</script>


