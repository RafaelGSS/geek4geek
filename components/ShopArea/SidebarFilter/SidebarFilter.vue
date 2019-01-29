<template>
  <div class="shop-sidebar-wrapper gray-bg-7 mrg-top-md mrg-top-sm">
    <a href="javascript:void(0);" class="filter-b" @click="showUnSidebar">
      <i class="fa fa-bars"></i> Refinar
    </a>
    <div class="items-sidebar" id="items-sidebar">
      <div class="shop-widget shop-sidebar-border pt-35">
        <h4 class="shop-sidebar-title">Categorias Semelhantes</h4>
        <div class="sidebar-list-style mt-20">
          <ul>
            <li>
              <a href="#">List1</a>
            </li>
            <li>
              <a href="#">List2</a>
            </li>
            <li>
              <a href="#">List3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="shop-widget shop-sidebar-border pt-35">
        <h4 class="shop-sidebar-title">Categorias Semelhantes</h4>
        <div class="sidebar-list-style mt-20">
          <ul>
            <li>
              <input type="checkbox">List1
            </li>
            <li>
              <input type="checkbox">List2
            </li>
            <li>
              <input type="checkbox">List3
            </li>
          </ul>
        </div>
      </div>
      <div class="shop-widget mt-40 shop-sidebar-border pt-35">
        <h4 class="shop-sidebar-title">Tags</h4>
        <div class="shop-tags mt-25">
          <ul>
            <li>
              <a href="#" @click="addToFilter('tags', 'Tag1')">Tag1</a>
            </li>
            <li>
              <a href="#" @click="addToFilter('tags', 'Tag2')">Tag2</a>
            </li>
            <li>
              <a href="#" @click="addToFilter('tags', 'Tag3')">Tag3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .items-sidebar {
    display: none;
  }
}

.filter-b {
  font-size: 1.2em;
}

.shop-sidebar-wrapper {
  border: 1px solid #efefef;
  padding: 17px 18px 29px;
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
  methods: {
    showUnSidebar() {
      if ($("#items-sidebar").css("display") == "none") {
        $("#items-sidebar").show(500);
      } else {
        $("#items-sidebar").hide(500);
      }
    },
    addToFilter(pType, pValue) {
      this.$busFilter.$emit('ADD_TO_FILTER', {
          type: pType,
          value: pValue
      })
    } 
  }
};
</script>


