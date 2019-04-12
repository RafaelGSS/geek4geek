<template>
  <nav>
    <ul>
      <li v-for="(item, index) in items" :key="`navbar-basic-${index}`">
        <slot name="item" :item="item">{{ item }}</slot>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: Array
  }
};
</script>

<style scoped>
ul li {
  display: inline-block;
  float: left;
  list-style: outside none none;
  margin-left: 30px;
}

@media (min-width: 768px) and (max-width: 991px) {
  ul li {
    margin-left: 15px !important;
  }
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  ul li {
    margin: 0 5px !important;
  }
}
</style>


