<template>
  <!-- Component image with badge-discount if needs -->
  <div>
    <div class="product-img-slider">
      <a :href="href">
        <img :src="src" :alt="alt">
      </a>
    </div>
    <div v-if="discount != null" class="discount">
      <badge-discount :discount="discount"></badge-discount>
    </div>
  </div>
</template>

<script>
import BadgeDiscount from "@/components/shop-area/BadgeDiscount";

export default {
  props: {
    href: String,
    src: String,
    alt: {
      type: String,
      default: "Imagem do Produto"
    },
    discount: {
      default: null
    }
  },
  components: {
    BadgeDiscount
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>

