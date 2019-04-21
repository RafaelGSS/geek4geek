<template>
  <span>-{{ this.discount }}%</span>
</template>

<script>
export default {
    props: {
        discount: Number
    }
};
</script>

<style scoped>
span {
  background-color: #3cb371;
  border-radius: 3px;
  color: #fff;
  left: 15px;
  line-height: 1;
  padding: 6px 14px 5px;
  position: absolute;
  top: 15px;
  z-index: 99;
}
</style>
