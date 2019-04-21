<template>
  <i
    @click="onClicked"
    :class="{'ion-android-star-outline': true, 'selected': this.checked, 'has-button': hasButton }"
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
    },
    id: {
      default: "star-bordered-1"
    }
  },
  data: function() {
    return {
      checked: this.selected
    };
  },
  methods: {
    onClicked() {
      if (this.hasButton) {
        this.checked = !this.checked;
        this.$emit("click", [this.checked, this.id]);
      }
    }
  }
};
</script>

<style scoped>
i {
  color: #b2b2b2;
  font-size: 17px;
}

.has-button {
  cursor: pointer;
}
.selected {
  color: #3cb371 !important;
}
</style>
