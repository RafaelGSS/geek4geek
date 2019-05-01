<template>
  <section>
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
                        <a href="#">{{ category.category_name | toUpper }}</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <navbar-menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
</template>

<style scoped>
a{
  color: #fff;
}
.header-bottom {
  background: #4a4a4a;
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
.menu-categories:hover h3 a {
  color: #3cb371;
}
.header-bottom {
  position: relative;
}

.menu-coffee-color .row div[class^="col-"]{
  position: static;
}
</style>

<script>
import NavbarMenu from "@/components/navigation/NavbarMenu"

export default {
  components: {
    NavbarMenu
  },
  props: {
    categories: Array
  },
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
  },
  filters: {
    toUpper: (value) => {
      if(!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
};
</script>
