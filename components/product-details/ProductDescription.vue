<template>
  <div class="product-description-wrapper">
    <slot>
      <p>Example of description</p>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product-description-wrapper > p {
  color: #242424;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 30px;
}
.product-description-wrapper li {
  color: #242424;
  display: block;
  font-size: 14px;
  list-style: outside none none;
  margin-bottom: 10px;
}
.product-description-wrapper li:last-child {
  margin-bottom: 0px;
}
</style>


