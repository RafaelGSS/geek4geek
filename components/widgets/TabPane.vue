<template>
  <div class="description-review-wrapper">
    <div class="tab-title nav text-center" :class="{'central-border': this.withCentralBorder}">
      <slot name="title"></slot>
    </div>
    <div :class="{'tab-content': true, 'content-value': true, 'bordered': this.withBorder}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withBorder: {
      default: true
    },
    withCentralBorder: {
      default: false
    }
  }
};
</script>

<style scoped>
.tab-content.content-value {
  background-color: #fff;
  padding: 50px 0 20px;
}
.bordered {
  border-radius: 5px;
  border-top: 1px solid #ebebeb;
}

.tab-title {
  justify-content: center;
  display: flex;
}

@media (min-width: 1200px) {
  .central-border::before,
  .central-border::after {
    background-color: #eee;
    content: "";
    height: 1px;
    width: 300px;
    justify-content: center;
    margin: auto;
  }
}
</style>
