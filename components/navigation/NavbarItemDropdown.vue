<template>
  <div class="item-nv">
    <a href="#" class="title">
      {{ title }}
      <i class="ion-chevron-down"></i>
    </a>
    <ul class="submenu">
      <li v-for="(item, index) in items" :key="`dropdown-item-${index}`">
        <a :href="item.href">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: Array, // [{ href: "", title: "" }]
    title: String
  }
};
</script>

<style scoped>
.title {
  color: #fff;
  display: inline-block;
  font-weight: 500;
  line-height: 55px;
  text-transform: uppercase;
}

.item-nv a i {
  color: #3cb371;
  font-size: 12px;
  margin-left: 6px;
}

ul li a {
  color: #555;
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
  display: block;
  text-align: left;
}

ul.submenu {
  background: #fff none repeat scroll 0 0;
  border-top: 1px solid #dcdcdc;
  box-shadow: 0 0 7px 0.5px rgba(0, 0, 0, 0.15);
  display: block;
  left: 0;
  padding: 20px 20px 24px;
  position: absolute;
  top: 100%;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  width: 190px;
  z-index: 999;
  transform: rotateX(90deg);
  transform-origin: center top 0;
}

.item-nv:hover > .submenu {
  transform: rotateX(0deg);
  visibility: visible;
}

ul li {
  margin-right: 0;
  display: block;
}

a:hover {
  color: #3cb371;
}

.submenu li a:hover {
  padding-left: 10px;
}
</style>
