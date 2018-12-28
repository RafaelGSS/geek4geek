<template>
<div>
  <HeaderTop />
  <HeaderMiddle />
  <HeaderBottom />
  <Slider />
  <FooterBottom />
</div>
</template>

<script>

import HeaderTop from '~/components/HeaderTop.vue'
import HeaderMiddle from '~/components/HeaderMiddle.vue'
import HeaderBottom from '~/components/HeaderBottom.vue'
import Slider from '~/components/Slider.vue'
import FooterBottom from '~/components/FooterBottom.vue'

export default {
  components: {
    HeaderTop, FooterBottom, HeaderMiddle, HeaderBottom, Slider
  }
}
</script>

<style>
</style>

