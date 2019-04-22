<template>
  <div class="header-top pt-10 pb-13">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-left">
            <ul>
              <li style="list-style: none;">
                <nuxt-link to="/" title="Geek4Geek">
                  <logo-owl-white :width="27" :height="27"></logo-owl-white>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <navbar-basic class="header-top-right" :items="items">
            <template v-slot:item="{ item }">
              <a :href="item.href">{{ item.title }}</a>
            </template>
          </navbar-basic>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoOwlWhite from "@/components/banner/logos/LogoOwlWhite";
import NavbarBasic from "@/components/navigation/NavbarBasic";

export default {
  components: {
    LogoOwlWhite,
    NavbarBasic
  },
  data: () => ({
    items: [
      {
        href: "#",
        title: "SAC"
      },
      {
        href: "#",
        title: "Login"
      },
      {
        href: "#",
        title: "Cadastre-se"
      }
    ]
  })
};
</script>


<style scoped>
.header-top {
  background: #282829;
  border-bottom: 10px;
}

a {
  color: #ddd;
}
a:hover {
  color: #fff;
}

.header-top-left {
  display: flex;
}

.header-top-right {
  float: right;
}
</style>

