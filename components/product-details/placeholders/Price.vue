<template>
    <div class="product-price-wrapper">
        <span>R$ {{ this.price }}</span>
        <span v-show="oldPrice != null" class="product-price-old">R$ {{ this.oldPrice }}</span>
    </div>
</template>

<script>
export default {
    props: {
        price: Number,
        oldPrice: {
            default: null
        }
    }
}
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
