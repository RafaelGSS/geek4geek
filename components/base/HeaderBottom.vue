<template>
  <section>
    <div class="header-bottom header-btm-coffee-res">
      <div class="container">
        <div class="menu-coffee-color toy-menu">
          <div class="row">
            <div class="col-lg-3">
              <navbar-item-dropdown-large :items="categories">
                TODAS CATEGORIAS
                <template v-slot:item="{ item }">
                  <nuxt-link :to="`/${item.category_name}/c`">{{ item.category_name | toUpper }}</nuxt-link>
                </template>
              </navbar-item-dropdown-large>
            </div>
            <div class="col-lg-9">
              <navbar-menu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarMenu from "@/components/navigation/NavbarMenu";
import NavbarItemDropdownLarge from "@/components/navigation/NavbarItemDropdownLarge";

export default {
  components: {
    NavbarMenu,
    NavbarItemDropdownLarge
  },
  props: {
    categories: Array
  },
  filters: {
    toUpper: value => {
      if (!value) return "";
      return value.toString().toUpperCase();
    }
  }
};
</script>

<style scoped>
a {
  color: #fff;
}
.header-bottom {
  background: #4a4a4a;
}

.header-bottom {
  position: relative;
}

.menu-coffee-color .row div[class^="col-"] {
  position: static;
}
</style>
