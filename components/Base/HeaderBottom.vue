<template>
  <div class="header-bottom header-btm-coffee-res">
    <div class="container">
      <div class="menu-coffee-color toy-menu">
        <div class="row">
          <div class="col-lg-3">
            <div class="menu-categories">
              <h3>
                <a id="showcat" href="#">
                  <i class="fa fa-bars"></i>TODAS AS CATEGORIAS
                </a>
              </h3>
              <div class="category-menu category-menu-1" id="hidecat">
                <nav class="cate-menu-nav">
                  <ul>
                    <li v-for="category in categories" :key="category.id">
                      <nuxt-link to="/about">{{ category.name }}</nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="main-menu main-none">
              <nav>
                <ul>
                  <li class="mega-menu-position">
                    <a href="#">LOJA
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
                                <a href="index-organic.html">Home - Organic
                                  <span class="red">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li class="mega-menu-title">Grupo Demonstração 05</li>
                              <li>
                                <a href="index-shoe.html">Home - Shoe
                                  <span class="red">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Página
                      <i class="ion-chevron-down"></i>
                    </a>
                    <ul class="submenu">
                      <li>
                        <a href="about-us.html">Sobre nós</a>
                      </li>
                      <li>
                        <a href="login-register.html">Login / Registro</a>
                      </li>
                      <li>
                        <a href="contact.html">Contate-nos</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="menu-border" href="#">CONTATO</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a{
  color: #fff;
}
.header-bottom {
  background: #282829;
}

.menu-categories {
  padding: 19px 10px 18px;
  position: relative;
}
.menu-categories > h3 {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: #fff;
}
.menu-categories > h3 a i {
  padding-right: 15px;
}
.category-menu {
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 9;
  display: none;
}
.category-menu nav > ul {
  padding: 30px 0;
}
.category-menu ul li {
  list-style: none;
  position: relative;
}
.category-menu nav > ul > li > a {
  border-bottom: 1px solid #f1f1f1;
  color: #242424;
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
  margin-left: 30px;
  margin-right: 20px;
  padding-bottom: 12px;
  text-transform: capitalize;
}
.category-menu nav > ul > li:last-child > a {
  border-bottom: medium none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.category-menu ul li:hover > a {
  color: #3cb371;
}
.category-menu nav > ul > li > a > i {
  color: #383838;
  float: right;
  font-size: 12px;
  position: relative;
  top: 1px;
}
.category-menu nav > ul > li:hover > a > i {
  color: #3cb371;
}
.category-menu nav > ul > li > a > i.none-lg {
  display: none;
}
.category-menu nav > ul > li > ul.category-mega-menu {
  background-color: rgba(255, 255, 255, 0.97);
  display: block;
  left: 100%;
  padding: 33px 30px 37px 30px;
  position: absolute;
  text-align: left;
  top: 0;
  transform: rotateX(90deg);
  transform-origin: center top 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  z-index: 999;
}
.category-menu nav > ul > li > ul.category-mega-menu.category-3-col {
  width: 700px;
}
.category-menu nav > ul > li > ul.category-mega-menu.category-2-col {
  width: 500px;
}
.category-menu nav > ul > li:hover > ul.category-mega-menu {
  transform: rotateX(0deg);
  visibility: visible;
}
.category-menu nav > ul > li > ul.category-mega-menu > li {
  border-right: 1px solid #ebebeb;
  display: inline-block;
  float: left;
  margin-right: 16px;
  padding-left: 30px;
}
.category-menu nav > ul > li > ul.category-mega-menu > li:last-child {
  border-right: none;
}
.category-menu nav > ul > li > ul.category-mega-menu.category-3-col > li {
  width: 30.333%;
}
.category-menu nav > ul > li > ul.category-mega-menu.category-2-col > li {
  width: 45%;
}
.category-menu nav > ul li ul.category-small-device {
  display: none;
  padding-left: 45px;
  padding-right: 20px;
}
.category-menu nav > ul li ul.category-small-device li {
  padding-bottom: 5px;
}
.category-menu nav > ul li ul.category-small-device li a {
  color: #242424;
}
.category-menu nav > ul li ul.category-small-device li:hover > a {
  color: #3cb371;
}
.category-menu nav > ul li ul.category-small-device li a i {
  float: right;
}
.category-menu nav > ul li ul.category-small-device li ul {
  padding-left: 25px;
}
.menu-coffee-color.toy-menu .main-menu ul li:hover > a,
.menu-coffee-color.toy-menu .main-menu ul li ul li a:hover {
  color: #3cb371;
}
.menu-categories:hover h3 a {
  color: #3cb371;
}
.main-menu.shoe-menu nav > ul > li > ul.mega-menu {
  top: 69%;
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
.main-menu.elec-menu nav > ul > li:hover > a {
  color: #ddd;
}
.main-menu ul li a i {
  color: #3cb371;
  font-size: 12px;
  margin-left: 6px;
}
.main-menu nav > ul > li > ul.submenu {
  background: #fff none repeat scroll 0 0;
  border-top: 1px solid #dcdcdc;
  box-shadow: 0 0 7px 0.5px rgba(0, 0, 0, 0.15);
  display: block;
  left: 0;
  padding: 20px 20px 24px;
  position: absolute;
  top: 100%;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  width: 190px;
  z-index: 999;
  transform: rotateX(90deg);
  transform-origin: center top 0;
}
.header-bottom {
  position: relative;
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
.main-menu nav > ul > li:hover > ul.submenu,
.main-menu nav > ul > li:hover > ul.mega-menu {
  transform: rotateX(0deg);
  visibility: visible;
}
.main-menu ul li ul li {
  margin-right: 0;
  display: block;
}
.main-menu ul li ul li a,
.category-menu ul li ul li a {
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
.main-menu.main-border nav > ul > li {
  margin-right: 0px;
  padding-left: 25px;
}
.main-menu.main-border nav > ul > li.mega-menu-position {
  margin-right: 0px;
  padding-left: 0px;
}
.main-menu.main-border nav > ul > li > a {
  padding-right: 21px;
}
.main-menu.main-border nav > ul > li.mega-menu-position > a {
  padding-left: 25px;
  padding-right: 21px;
  position: relative;
}
.main-menu.main-border nav > ul > li > a:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: #3cb371;
}
.main-menu.main-border nav > ul > li > a.menu-border:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: #3cb371;
}

.menu-jewelry .main-menu ul li ul > li.mega-menu-title {
  margin: 0 0 17px;
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
.main-menu.elec-menu
  nav
  > ul
  > li
  > ul.mega-menu
  > li
  > ul
  > li
  > ul
  > li:hover
  > a {
  color: #0363cd;
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
.header-bottom-autoparts
  .main-menu
  nav
  > ul
  > li
  > ul.mega-menu
  > li
  > ul
  > li
  ul
  li
  a
  span {
  padding: 3px 5px 2px;
  font-size: 14px;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a span.blue {
  background-color: #0363cd;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a span.red {
  background-color: #df2121;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a span.red-2 {
  background-color: #cc2121;
}
.main-menu nav > ul > li > ul.mega-menu > li > ul > li ul li a span.red-3 {
  background-color: #dd1c1c;
}

.logo.mobile-logo {
  display: none;
}
#mobile-menu-active {
  display: none;
}
.mobile-menu-area {
  display: none;
}

.menu-coffee-color .row div[class^="col-"],
.menu-byzantine-color .row div[class^="col-"],
.header-middle-color-15 .row div[class^="col-"],
.main-menu-position .row div[class^="col-"] {
  position: static;
}
</style>

<script>
export default {
  props: ['categories'],
  mounted() {
    /*-------------------------
        Showlogin toggle function
      --------------------------*/
    $("#showcat").on("click", function(e) {
      e.preventDefault();
      $("#hidecat").slideToggle(900);
    });

    /* Category Dropdown Menu  */
    if ($(window).width() < 992) {
      function sidemenuDropdown() {
        var $this = $(".category-menu");
        $this
          .find("nav.cate-menu-nav .cr-dropdown")
          .find("ul.left-menu")
          .css("display", "none");
        $this.find("nav.cate-menu-nav .cr-dropdown ul").slideUp();
        $this.find("nav.cate-menu-nav .cr-dropdown a").on("click", function(e) {
          e.preventDefault();
          $(this)
            .parent(".cr-dropdown")
            .children("ul.category-small-device")
            .slideToggle();
        });
        $this
          .find(
            "nav.cate-menu-nav .cr-dropdown ul.category-small-device .cr-sub-dropdown ul"
          )
          .css("display", "none");
        $this
          .find(
            "nav.cate-menu-nav .cr-dropdown ul.category-small-device .cr-sub-dropdown a"
          )
          .on("click", function(e) {
            e.preventDefault();
            $(this)
              .parent(".cr-sub-dropdown")
              .children("ul")
              .slideToggle();
          });
      }
      sidemenuDropdown();
    }
  }
};
</script>


