<template>
  <div class="tab-pane active">
    <div class="custom-row">
      <div
        :class="['custom-col-' + itemsPerRow, 'mb-30']"
        v-for="prod in products"
        :key="`prod-${prod.id}`"
      >
        <product class="geek4-product-2 mrg-inherit" :product="prod"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/shop-area/Product";

export default {
  components: {
    Product
  },
  props: {
    products: Array,
    itemsPerRow: {
      type: Number,
      default: 4
    }
  },
  data: () => ({
    filtersAppied: [],
    sortName: "default"
  })
};
</script>

<style scoped>
/* Items per row */
.custom-col-5 {
  flex: 0 0 20%;
  max-width: 20%;
}
.custom-col-4 {
  flex: 0 0 25%;
  max-width: 25%;
}
.custom-col-3 {
  flex: 0 0 33.333%;
  max-width: 33.333%;
}
.custom-col-2 {
  flex: 0 0 50%;
  max-width: 50%;
}
.custom-row {
  display: flex;
  flex-wrap: wrap;
}
.geek4-product-2 {
  background: #fff none repeat scroll 0 0;
  border-radius: 4px;
  position: relative;
  text-align: left;
  transition: all 0.4s ease-out 0s;
  word-wrap: break-word;
  z-index: 1;
  margin: 15px 4px;
}
.geek4-product-2.mrg-inherit {
  margin: 0;
}
.geek4-product-2:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  z-index: 3;
}
.geek4-product-2.mb-30 {
  margin-bottom: 28px;
}
.geek4-product-2.mb-45 {
  margin-bottom: 45px;
}
</style>
