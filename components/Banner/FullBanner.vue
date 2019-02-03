<template>
    <div class="banner-area">
      <img :src="img.src" :alt="img.alt">
    </div>
</template>

<style scoped>
.banner-area > img {
    width: 100%;
}
</style>

<script>
export default {
    props: {
        img: {
            type: Object,
            default: function() {
                 return {src:"/img/banner/banner-80.jpg", alt: "banner"}
            }
        }
    }
}
</script>
