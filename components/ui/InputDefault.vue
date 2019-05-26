<template>
  <input
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  props: {
    type: String,
    value: {
      default: ""
    },
    placeholder: String
  }
};
</script>

<style lang="scss" scoped>
input {
  background-color: transparent;
  border: 1px solid #ebebeb;
  color: #666;
  font-size: 14px;
  height: 50px;
  margin-bottom: 30px;
  padding: 0 15px;
}
input::-moz-placeholder {
  color: #666;
  opacity: 1;
}
input::-webkit-input-placeholder {
  color: #666;
  opacity: 1;
}
input[type="checkbox"] {
  height: 15px;
  margin: 0;
  position: relative;
  top: 1px;
  width: 17px;
}
</style>

