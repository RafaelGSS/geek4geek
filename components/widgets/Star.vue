<template>
  <i
    @click="onClicked"
    :class="{'ion-star': true, 'star-selected': checked, 'has-button': hasButton }"
  ></i>
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
  },
  data: () => ({
    checked: false
  }),
  mounted() {
    this.checked = this.selected;
  },
  methods: {
    onClicked() {
      if (this.hasButton) {
        this.checked = !this.checked;
        this.$emit("click", this.checked);
      }
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


