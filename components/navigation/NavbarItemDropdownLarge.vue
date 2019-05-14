<template>
  <div class="menu-categories">
    <h3>
      <a id="showcat" href="#all-categories">
        <i class="fa fa-bars"></i>
        <slot>TITLE</slot>
      </a>
    </h3>
    <div class="category-menu category-menu-1" id="hidecat">
      <nav class="cate-menu-nav">
        <ul>
          <li v-for="item in items" :key="`dropdown-large-${item.id}`">
            <slot name="item" :item="item">{{ item }}</slot>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  mounted() {
    $("#showcat").on("click", function(e) {
      e.preventDefault();
      $("#hidecat").slideToggle(900);
    });
  }
};
</script>

<style scoped>
.menu-categories {
  padding: 19px 10px 18px;
  position: relative;
}
.menu-categories > h3 {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: #fff;
}
.menu-categories > h3 a i {
  padding-right: 15px;
}
.menu-categories > h3 a {
  color: #fff;
}
.menu-categories:hover h3 a {
  color: #3cb371;
}
.category-menu {
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 9;
  display: none;
}
.category-menu nav > ul {
  padding: 30px 0;
}
.category-menu ul li {
  list-style: none;
  position: relative;
}
.category-menu nav > ul > li > a {
  border-bottom: 1px solid #f1f1f1;
  color: #242424;
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
  margin-left: 30px;
  margin-right: 20px;
  padding-bottom: 12px;
  text-transform: capitalize;
}
.category-menu nav > ul > li:last-child > a {
  border-bottom: medium none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.category-menu ul li:hover > a {
  color: #3cb371;
}
</style>


