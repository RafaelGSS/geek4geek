<template>
  <div class="shop-widget mt-40 shop-sidebar-border pt-35">
    <h4 class="shop-sidebar-title">{{ title }}</h4>
    <div v-if="type == 'checkbox'" class="sidebar-list-style mt-20">
      <ul>
        <li v-for="item in items" :key="item">
          <input type="checkbox">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
    <div v-if="type == 'tags'" class="shop-tags mt-25">
      <ul>
        <li v-for="item in items" :key="item">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h4.shop-sidebar-title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.shop-sidebar-border {
  border-top: 1px solid #ebebeb;
}
.sidebar-list-style ul li {
  display: block;
  list-style: outside none none;
  padding: 0 0 6px;
}
.sidebar-list-style ul li a {
  color: #242424;
}
.sidebar-list-style ul li a:hover {
  color: #0363cd;
}
.sidebar-list-style ul li:last-child {
  padding: 0 0 0px;
}
.sidebar-list-style ul li input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: 1px solid #d7d7d7;
  float: left;
  height: 17px;
  margin: 3px 12px 0 0;
  padding-left: 0;
  width: 17px;
  cursor: pointer;
}


.shop-tags li {
    display: inline-block;
    list-style: outside none none;
    margin: 0 4px 11px 0;
}
.shop-tags a {
    border: 1px solid #ebebeb;
    color: #242424;
    display: inline-block;
    line-height: 1;
    padding: 8px 12px;
}
.shop-tags a:hover {
    border: 1px solid #047afe;
    background-color: #047afe;
    color: #fff;
}
</style>


<script>
export default {
  props: {
    type: {
      type: String,
      default: "checkbox"
    },
    title: {
        type: String,
        default: "Default title"
    },
    items: {
        type: Array,
        default:  () => []
    }

  }
};
</script>


