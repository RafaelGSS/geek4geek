<template>
  <a class="btn-style btn-hover" :href="href">
    <slot>Button</slot>
  </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#'
        },
    }
}
</script>

<style scoped>
</style>


