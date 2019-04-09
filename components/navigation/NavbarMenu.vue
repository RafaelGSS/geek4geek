<template>
  <div class="main-menu main-none">
    <nav>
      <ul>
        <li class="mega-menu-position">
          <!-- <navbar-item-megamenu /> -->
          <a href="#">
            LOJA
            <i class="ion-chevron-down"></i>
          </a>
          <ul class="mega-menu">
            <li>
              <ul>
                <li>
                  <ul>
                    <li class="mega-menu-title">Grupo Demonstração 01</li>
                    <li>
                      <a href="index.html">Home - electronics</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="mega-menu-title">Grupo Demonstração 02</li>
                    <li>
                      <a href="index-game.html">Home - game</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="mega-menu-title">Grupo Demonstração 03</li>
                    <li>
                      <a href="index-watch.html">Home - watch</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="mega-menu-title">Grupo Demonstração 04</li>
                    <li>
                      <a href="index-organic.html">
                        Home - Organic
                        <span class="red">New</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li class="mega-menu-title">Grupo Demonstração 05</li>
                    <li>
                      <a href="index-shoe.html">
                        Home - Shoe
                        <span class="red">New</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
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
  data: () => ({
    itemsDropdown: [
      {
        title: "Página",
        items: [
          { href: "#", title: "Sobre nós" },
          { href: "#", title: "Login / Registro" },
          { href: "#", title: "Contate-nos" }
        ]
      }
    ],
    itemsMegamenu: [
      {
        title: "Loja",
        items: [{ columnTitle: "", items: [] }]
      }
    ]
  })
};
</script>

<style scoped>
a {
  color: #fff;
}

.main-menu nav > ul > li > ul.mega-menu {
  background-color: rgba(255, 255, 255, 0.97);
  border-top: 1px solid #dcdcdc;
  display: block;
  left: 0;
  padding: 33px 0px 62px 0;
  position: absolute;
  text-align: left;
  top: 100%;
  transform: rotateX(90deg);
  transform-origin: center top 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  width: 100%;
  z-index: 999;
}
.main-menu nav > ul > li:hover > ul.mega-menu {
  transform: rotateX(0deg);
  visibility: visible;
}
.main-menu ul li ul li {
  margin-right: 0;
  display: block;
}
.main-menu ul li ul li a {
  color: #555;
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
  display: block;
  text-align: left;
}
.main-menu ul li ul li a:hover {
  color: #3cb371;
  padding-left: 10px;
}

.main-menu ul li.mega-menu-position {
  position: static;
}

.main-menu nav > ul > li > ul.mega-menu > li {
  width: 1170px;
  margin: 0 auto;
}
.main-menu ul li ul > li.mega-menu-title,
.category-menu ul li ul > li.category-mega-menu-title {
  color: #242424;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 17px;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li {
  border-right: 1px solid #ebebeb;
  display: inline-block;
  float: left;
  margin-right: 16px;
  width: 16%;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li:last-child {
  border-right: none;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a {
  display: inline-block;
  position: relative;
}

.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a span {
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  line-height: 1;
  padding: 2px 5px 3px;
  position: absolute;
  right: -40px;
  top: 7px;
}

.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a span.red {
  background-color: #df2121;
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
</style>


