<template>
  <div class="slider-area">
    <no-ssr>
      <carousel :items=1 :loop=1 :center=1 :autoplay=1 :autoplayHoverPause=1 :nav=0>
        <a href="#" class="slider-active bg-img">
            <img src="/img/slider/slider-51.jpg" class="single-slider bg-img slider-height-22">
        </a>
        <a href="#" class="slider-active bg-img">
            <img src="/img/slider/slider-51.jpg" class="single-slider bg-img slider-height-22">
        </a>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
}
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

.owl-theme .owl-dots .active span{
    background: #000 !important;
}
</style>


