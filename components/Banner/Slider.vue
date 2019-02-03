<template>
  <div class="slider-area">
    <no-ssr>
      <carousel :items=1 :loop=1 :center=1 :autoplay=1 :autoplayHoverPause=1 :nav=0>
        <a href="#" class="slider-active bg-img">
            <img id="img1" src="/img/slider/slider-51.jpg" class="single-slider bg-img slider-height-22">
            <img id="img2" src="/img/slider/single-slider-4.png" class="single-slider bg-img slider-height-22">
            
        </a>
        <a href="#" class="slider-active bg-img">
            <img id="img1" src="/img/slider/slider-51.jpg" class="single-slider bg-img slider-height-22">
            <img id="img2" src="/img/slider/single-slider-4.png" class="single-slider bg-img slider-height-22">
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
#img1 {display:block;}
#img2 {display:none}

@media all and (max-width: 600px) {
    #img1 {display: none;}
    #img2 {display: block;}
}
</style>
<style>

.owl-theme .owl-dots .active span{
    background: #000 !important;
}
</style>


