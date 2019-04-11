<template>
  <div class="header-top pt-10 pb-13">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-left">
            <ul>
              <li style="list-style: none;">
                <nuxt-link to="/" title="Geek4Geek">
                  <logo-owl-white width="27" height="27"/>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <nav class="header-top-right">
            <ul>
              <li>
                <a href="wishlist.html">Lista de desejos</a>
              </li>
              <li>
                <a href="checkout.html">Fale Conosco</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoOwlWhite from "@/components/banner/logos/LogoOwlWhite";

export default {
  components: {
    LogoOwlWhite
  }
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
.header-top-right ul li {
  display: inline-block;
  float: left;
  list-style: outside none none;
  margin-left: 30px;
}
</style>

