<template>
  <i :class="{'ion-star': true, 'star-selected': selected, 'has-button': hasButton }"></i>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: true
    },
    hasButton: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
i {
  color: #ddd;
  font-size: 18px;
}

.has-button {
  cursor: pointer;
}

.star-selected {
  color: #3cb371 !important;
}
</style>


