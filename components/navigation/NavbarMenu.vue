<template>
  <div class="main-menu main-none">
    <nav>
      <ul>
        <li v-for="(itemsMega, idx) in itemsMegamenu" :key="`itemsmega-${idx}`" class="mega-menu-position">
          <navbar-item-megamenu :title="itemsMega.title" :items="itemsMega.items" />
        </li>
        <li v-for="(itemsDrop, index) in itemsDropdown" :key="`itemsdrop-${index}`">
          <navbar-item-dropdown :title="itemsDrop.title" :items="itemsDrop.items"/>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import NavbarItemDropdown from "@/components/navigation/NavbarItemDropdown";
import NavbarItemMegamenu from "@/components/navigation/NavbarItemMegamenu";

export default {
  components: {
    NavbarItemDropdown,
    NavbarItemMegamenu
  },
  props: {
    itemsMegamenu: Array,
    itemsDropdown: Array
  }
};
</script>

<style scoped>
a {
  color: #fff;
}

.main-menu ul li.mega-menu-position {
  position: static;
}

.main-menu ul li {
  display: inline-block;
  list-style: outside none none;
  margin-right: 49px;
  position: relative;
}
.main-menu ul li a {
  color: #fff;
  display: inline-block;
  font-weight: 500;
  line-height: 55px;
  text-transform: uppercase;
}
.main-menu ul li a i {
  color: #3cb371;
  font-size: 12px;
  margin-left: 6px;
}

.main-menu ul li:hover > a,
.main-menu ul li ul li a:hover {
  color: #3cb371;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .main-menu ul li {
    margin-right: 17px !important;
  }
}
</style>
