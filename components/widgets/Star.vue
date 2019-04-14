<template>
  <i
    @click="onClicked"
    :class="{'ion-star': true, 'star-selected': this.checked, 'has-button': hasButton || btnClass }"
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
    btnClass: {
      type: Boolean,
      default: false
    },
    id: {
      default: "star-1"
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
      }
      this.$emit("click", [this.checked, this.id]);
    }
  },
  watch: {
    selected: function(newVal, oldVal) {
      this.checked = newVal
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


