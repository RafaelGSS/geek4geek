<template>
  <div class="shop-widget shop-sidebar-border pt-15 pb-15">
    <h4 class="shop-sidebar-title">
      <slot name="title"></slot>
    </h4>
    <div :class="{'vertical': isVert, 'horizontal': isHoriz, 'mt-25': true}">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="`menu-card-${index}`"
        >
          <slot name="item" :item="item">{{ item }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    orientation: {
      type: String,
      validator: val => ["horizontal", "vertical"].includes(val)
    }
  },
  computed: {
    isHoriz() {
      return this.orientation == "horizontal";
    },
    isVert() {
      return this.orientation == "vertical";
    }
  }
};
</script>

<style scoped>
h4.shop-sidebar-title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.shop-sidebar-border {
  border-top: 1px solid #ebebeb;
}
.vertical ul li {
  display: block;
  list-style: outside none none;
  padding: 0 0 6px;
}
.vertical ul li a {
  color: #242424;
}
.vertical ul li a:hover {
  color: #3cb371;
  text-decoration: underline;
}
.vertical ul li:last-child {
  padding: 0 0 0px;
}
.vertical ul li input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: 1px solid #d7d7d7;
  float: left;
  height: 17px;
  margin: 3px 12px 0 0;
  padding-left: 0;
  width: 17px;
  cursor: pointer;
}
.horizontal li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 4px 11px 0;
}
.horizontal a {
  border: 1px solid #ebebeb;
  color: #242424;
  display: inline-block;
  line-height: 1;
  padding: 8px 12px;
  cursor: pointer;
}
.horizontal a:hover {
  border: 1px solid #3cb371;
  background-color: #3cb371;
  color: #fff;
}
@media (min-width: 992px) and (max-width: 1199px) {
  .horizontal a {
    padding: 7px 6px !important;
  }
}
@media (max-width: 767px) {
  .horizontal a {
    padding: 7px !important;
  }
}

</style>


