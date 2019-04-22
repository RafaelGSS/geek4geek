<template>
  <div class="simple-list">
    <ul>
      <li class="categories-title">
          <slot name="title"></slot>
      </li>
      <li v-for="(item, index) in items" :key="`det-cat-${index}`">
        <slot name="item" :item="item">{{ item }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>

<style scoped>
.simple-list li {
  display: inline-block;
  list-style: outside none none;
  color: #242424;
}
.simple-list li.title {
  margin: 0 3px 0 0;
}
.simple-list li a {
  color: #242424;
}
.simple-list li a:hover {
  color: #3cb371;
}
.simple-list {
  margin: 0 0 12px;
}
.simple-list:last-child {
  margin: 0 0 0px;
}
</style>

