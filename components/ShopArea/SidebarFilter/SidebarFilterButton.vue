<template>
     <div class="shop-widget mt-40 shop-sidebar-border pt-35">
    <h4 class="shop-sidebar-title">{{ title }}</h4>
    <div class="shop-tags mt-25">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<style>
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
    props: ['title']
}
</script>

