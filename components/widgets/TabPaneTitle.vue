<template>
  <a :class="{ 'active': active }" data-toggle="tab" :href="`#${id}`">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "tab-pane-1"
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
a {
  border-bottom: 2px solid transparent;
  color: #666;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  margin: 0 35px;
  padding-bottom: 10px;
}
a.active {
  border-bottom: 2px solid #3cb371;
  color: #242424;
}

@media (max-width: 767px) {
  a {
    font-size: 17px !important;
    margin: 0 8px !important;
    padding-bottom: 10px !important;
  }
}
</style>


