<template>
<div>
  <HeaderTop />
  <HeaderMiddle />
  <HeaderBottom />
  <FooterBottom />
</div>
</template>

<script>

import HeaderTop from '~/components/HeaderTop.vue'
import HeaderMiddle from '~/components/HeaderMiddle.vue'
import HeaderBottom from '~/components/HeaderBottom.vue'
import FooterBottom from '~/components/FooterBottom.vue'

export default {
  components: {
    HeaderTop, FooterBottom, HeaderMiddle, HeaderBottom
  }
}
</script>

<style>
</style>

