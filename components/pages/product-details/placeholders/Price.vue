<template>
  <div class="product-price-wrapper">
    <span>{{ price | toReal }}</span>
    <span v-show="discount != null" class="product-price-old">{{ this.oldPrice | toReal }}</span>
  </div>
</template>

<script>
import cashFormatter from "@/mixins/cashFormatter";

export default {
  mixins: [cashFormatter],
  props: {
    price: Number,
    discount: {
      default: null
    }
  },
  computed: {
    oldPrice() {
      return this.price + this.price * (this.discount / 100)
    }
  }
};
</script>

<style scoped>
.product-price-wrapper {
  display: block;
  transition: all 0.3s ease 0s;
}
.product-price-wrapper > span {
  color: #242424;
  margin: 0 2px;
}
.product-price-wrapper > span.product-price-old {
  text-decoration: line-through;
}
</style>
