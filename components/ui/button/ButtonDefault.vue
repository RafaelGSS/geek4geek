<template>
  <a :class="`btn-style-${color}`" :href="href" @click="$emit('click')">
    <slot>Button</slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "#"
    },
    title: {
      type: String,
      default: "Botão Geek4Geek"
    },
    color: {
      type: String,
      default: "green"
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-style-green {
  background-color: transparent;
  border: 2px solid #eeeeee;
  color: $geekFontDefault;
  display: block;
  font-size: 14px;
  font-weight: 500;
  padding: 14px 20px 12px;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
}
.btn-style-green:hover {
  background-color: $geekGreenDefault;
  border: 2px solid $geekGreenDefault;
  color: #fff;
}
</style>


