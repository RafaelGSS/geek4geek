<template>
  <div :id="id" :class="{ 'tab-pane': true, 'active': active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "tab-content-1"
        },
        active: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>

</style>

