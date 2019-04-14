<template>
  <div class="description-review-wrapper">
    <div class="description-review-topbar nav text-center">
      <slot name="title"></slot>
    </div>
    <div class="tab-content description-review-bottom">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-content.description-review-bottom {
  background-color: #fff;
  border-radius: 5px;
  border-top: 1px solid #ebebeb;
  padding: 50px 0 20px;
}

.description-review-topbar {
  justify-content: center;
  display: flex;
}
</style>
