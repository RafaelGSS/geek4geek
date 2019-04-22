<template>
  <div class="shop-service-content-4 mb-30">
    <div class="service-content-4-img">
      <img :src="iconImage" :alt=altImage>
    </div>
    <div class="service-content-4-content">
      <h5>{{ title }}</h5>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    iconImage: {
      type: String
    },
    altImage: {
      type: String,
      default: ""
    }
  }
}
</script>


<style scoped>
.shop-service-content-4 {
    display: flex;
    justify-content: center;
}
.service-content-4-img {
    flex: 0 0 48px;
}
.service-content-4-img > img {
    width: 100%;
}
.service-content-4-content {
    margin-left: 20px;
    text-align: left;
}
.service-content-4-content > h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 1px;
}
.service-content-4-content > p {
    color: #757575;
    margin: 0;
}
.shop-service-content-4 {
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    padding: 30px 20px 26px;
}
</style>
