<template>
<div class="shop-widget shop-sidebar-border pt-35">
    <h4 class="shop-sidebar-title">{{ title }}</h4>
    <div class="sidebar-list-style mt-20">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>    
</template>

<style>
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

</style>

<script>
export default {
    props: ['title']
}
</script>
