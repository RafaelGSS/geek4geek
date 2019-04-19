<template>
  <div class="shop-sidebar-wrapper mrg-top-md mrg-top-sm">
    <menu-dropdown-fixed>
      <template slot="title">Refinar</template>
      <template>
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
          <h4 class="shop-sidebar-title">Material</h4>
          <div class="sidebar-list-style mt-20">
            <ul>
              <li>
                <input type="checkbox" @click="addToFilter('Material', 'PVC')">PVC
              </li>
              <li>
                <input type="checkbox" @click="addToFilter('Material', 'RESINA')">RESINA
              </li>
              <li>
                <input type="checkbox" @click="addToFilter('Material', 'MERDA')">MERDA
              </li>
            </ul>
          </div>
        </div>
        <div class="shop-widget mt-40 shop-sidebar-border pt-35">
          <h4 class="shop-sidebar-title">Tags</h4>
          <div class="shop-tags mt-25">
            <ul>
              <li>
                <a id="Tag_Tag1" @click="addToFilter('Tag', 'Tag1'); setActive($event);">Tag1</a>
              </li>
              <li>
                <a id="Tag_Tag2" @click="addToFilter('Tag', 'Tag2'); setActive($event);">Tag2</a>
              </li>
              <li>
                <a id="Tag_Tag3" @click="addToFilter('Tag', 'Tag3'); setActive($event);">Tag3</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </menu-dropdown-fixed>
  </div>
</template>

<script>
import busFilter from "@/assets/js/eventBus_filter.js";
import MenuDropdownFixed from "@/components/widgets/menu/MenuDropdownFixed";

export default {
  components: {
    MenuDropdownFixed
  },
  methods: {
    addToFilter(pType, pValue) {
      busFilter.$emit("ADD_TO_FILTER", { type: pType, value: pValue });
    },
    setActive(event) {
      var id = event.currentTarget.id;
      document.getElementById(id).classList.toggle("active");
    }
  }
};
</script>

<style scoped>
.shop-sidebar-wrapper {
  border: 1px solid #efefef;
  padding: 10px;
  background-color: #fdfdfd;
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
  cursor: pointer;
}
.shop-tags a:hover {
  border: 1px solid #3cb371;
  background-color: #3cb371;
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
  color: #3cb371;
  text-decoration: underline;
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

.active {
  border: 1px solid #3cb371;
  background-color: #3cb371;
  color: #fff !important;
}
</style>
