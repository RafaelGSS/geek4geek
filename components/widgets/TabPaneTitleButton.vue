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
 a.active {
  border: 2px solid #3cb371;
  color: #3cb371;
}
a {
  border: 2px solid #eee;
  margin: 5px;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  padding: 13px 32px 12px;
  transition: all 0.3s ease 0s;
}

@media (max-width: 767px) {
  a {
    font-size: 17px !important;
    padding-bottom: 10px !important;
  }
}
</style>


