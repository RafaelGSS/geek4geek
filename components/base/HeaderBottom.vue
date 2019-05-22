<template>
  <section>
    <div class="header-bottom header-btm-coffee-res">
      <div class="container">
        <div class="menu-coffee-color">
          <div class="row">
            <div class="col-lg-3">
              <navbar-item-dropdown-large style="height: 100%" :items="categories" border>
                TODAS CATEGORIAS
                <template v-slot:item="{ item }">
                  <nuxt-link :to="`/${item.category_name}/c`">{{ item.category_name | toUpper }}</nuxt-link>
                </template>
              </navbar-item-dropdown-large>
            </div>
            <div class="col-lg-9">
              <navbar-menu :itemsMegamenu="this.itemsMegamenu" :itemsDropdown="this.itemsDropdown"/>
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
  data: () => ({
    itemsDropdown: [
      {
        title: "Página",
        items: [
          { href: "#", title: "Login / Registro" },
        ]
      },
      {
        title: "Sobre nós",
        items: [
          { href: "/sobre-nos", title: "Sobre nós" },
          { href: "/politica-privacidade", title: "Nossa Política"},
          { href: "#", title: "Contate-nos" }
        ]
      }
    ],
    itemsMegamenu: [
      {
        title: "Loja",
        items: [
          {
            title: "Grupo Demonstração 01",
            items: [{ href: "#", title: "Home - Game", new: true }]
          },
          {
            title: "Grupo Demonstração 02",
            items: [{ href: "#", title: "Home - Game", new: false }]
          },
          {
            title: "Grupo Demonstração 03",
            items: [{ href: "#", title: "Home - Game", new: false }]
          },
          {
            title: "Grupo Demonstração 04",
            items: [{ href: "#", title: "Home - Game", new: false }]
          },
          {
            title: "Grupo Demonstração 05",
            items: [{ href: "#", title: "Home - Game", new: true }]
          }
        ]
      }
    ]
  }),
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
