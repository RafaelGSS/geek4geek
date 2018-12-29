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
.owl-dot-style .owl-dot {
    background: #4b4f53 none repeat scroll 0 0;
    border-radius: 50px;
    display: inline-block;
    height: 3px;
    margin: 0 2px;
    width: 3px;
}
.owl-dot-style .owl-dot.active {
    background: #fff none repeat scroll 0 0;
    height: 10px;
    position: relative;
    top: 2px;
    width: 10px;
}
.owl-dot-style .owl-dots {
    bottom: 40px;
    left: 0px;
    position: absolute;
    right: 0;
    text-align: center;
}

</style>


