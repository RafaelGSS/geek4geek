<template>
  <section>
    <div class="banner-area pt-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3">
            <image-transition :href="img1.href" :src="img1.src" :alt="img1.alt" />
          </div>
          <div class="col-lg-6 col-md-6">
            <image-transition :href="img2.href" :src="img2.src" :alt="img2.alt" />
          </div>
          <div class="col-lg-3 col-md-3">
            <image-transition :href="img3.href" :src="img3.src" :alt="img3.alt" />
          </div>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
import ImageTransition from "@/components/banner/images/ImageTransition";

export default {
  components: {
    ImageTransition
  },
  props: {
    img1: {
      type: Object,
      default: () => ({href:"#3", src: '/img/banner/banner-76.jpg', alt: 'banner76'})
    },
    img2: {
      type: Object,
      default: () => ({href:"#3", src: '/img/banner/banner-77.jpg', alt: 'banner77'})
    },
    img3: {
      type: Object,
      default: () => ({href:"#3", src: '/img/banner/banner-78.jpg', alt: 'banner78'})
    }
  }
};
</script>


