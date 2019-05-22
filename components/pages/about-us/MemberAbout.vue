<template>
  <div class="team-wrapper mb-30">
    <div class="team-img">
      <a href="#">
        <img :src="image" :alt="`${name} geek4geek team`">
      </a>
    </div>
    <div class="team-content text-center">
      <h4>{{ name }}</h4>
      <span>{{ position }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    position: String,
    image: String
  }
};
</script>

<style lang="scss" scoped>
.team-img {
  overflow: hidden;
  position: relative;
}
.team-img img {
  width: 100%;
}
.team-content {
  box-shadow: 0 3px 5px rgba(85, 85, 85, 0.2);
  padding: 20px 10px 23px;
}
.team-content > h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 5px;
  text-transform: capitalize;
}
.team-content > span {
  font-size: 15px;
}
</style>
