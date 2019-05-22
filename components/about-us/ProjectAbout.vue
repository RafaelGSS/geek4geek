<template>
  <div class="text-center mb-30">
    <div class="count-icon">
      <span :class="icon"></span>
    </div>
    <div class="count-title">
      <h2 class="count">{{ count }}</h2>
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    name: String,
    icon: String
  }
};
</script>

<style lang="scss" scoped>
.count-icon span {
  font-size: 50px;
  line-height: 1;
  display: inline-block;
}
.count-icon span {
  animation: 850ms ease-in-out 0s normal none 1 running tada;
}
.count-title h2 {
  color: #0363cd;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.2px;
  margin: 15px 0 5px;
}
.count-title > span {
  color: #454545;
  font-size: 20px;
  text-transform: capitalize;
}
</style>
