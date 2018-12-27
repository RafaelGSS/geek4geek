<template>
<div>
  <HeaderTop />
  <HeaderMiddle />
  <FooterBottom />
</div>
</template>

<script>

import HeaderTop from '~/components/HeaderTop.vue'
import HeaderMiddle from '~/components/HeaderMiddle.vue'
import FooterBottom from '~/components/FooterBottom.vue'

export default {
  components: {
    HeaderTop, FooterBottom, HeaderMiddle
  }
}
</script>

<style>
</style>

