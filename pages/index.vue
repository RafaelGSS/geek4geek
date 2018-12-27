<template>
<div>
  <HeaderTop />
  <FooterTop />
  <FooterBottom />
</div>
</template>

<script>

import HeaderTop from '~/components/HeaderTop.vue'
import FooterTop from '~/components/FooterTop.vue'
import FooterBottom from '~/components/FooterBottom.vue'

export default {
  components: {
    HeaderTop,FooterTop, FooterBottom
  }
}
</script>

<style>
</style>

