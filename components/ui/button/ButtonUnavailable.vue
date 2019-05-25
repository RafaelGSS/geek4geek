<template>
  <a href="#item-unavailable" title="Item indisponível"  @click="$emit('click')">
    <slot>Indisponível</slot>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  background-color: #eef0f1;
  border-radius: 3px;
  color: $geekFontDefault;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 9px 20px 8px;
  text-transform: uppercase;
}

a:hover {
  cursor: not-allowed;
  background-color: #242424;
  color: #fff;
}
</style>


