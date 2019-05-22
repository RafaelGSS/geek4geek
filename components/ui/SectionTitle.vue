<template>
  <h4 class="section-title-about">
      <slot>Section</slot>
  </h4>
</template>

<style lang="scss" scoped>
h4.section-title-about {
  display: inline-block;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 15px;
  position: relative;
}
h4.section-title-about::before {
  background-color: #444444;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  transition: all 0.4s ease 0s;
  width: 100%;
}
</style>

