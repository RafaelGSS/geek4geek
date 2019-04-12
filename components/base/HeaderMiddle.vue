<template>
  <section>
    <div class="header-middle ptb-40 header-middle-color">
      <div class="container">
        <div class="row">
          <!-- Logo -->
          <div class="col-lg-3 col-md-12">
            <div class="logo logo-mrg">
              <nuxt-link to="/" title="Geek4Geek">
                <logo-name-white :height=60 :width=250></logo-name-white>
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-9 col-md-12 col-12">
            <div class="header-contact-search-wrapper f-right">
              <!-- Whatsapp Contact -->
              <card-contact-whatsapp class="middle-same">
                Fale Conosco
                <br>Whatsapp: (012) 98155-7110
              </card-contact-whatsapp>
              <!-- Search -->
              <div class="header-search middle-same">
                <form-search-website/>
              </div>
              <!-- Shopping Cart -->
              <shopping-cart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ShoppingCart from "@/components/base/ShoppingCart.vue";

import FormSearchWebsite from "@/components/widgets/search/FormSearchWebsite";
import CardContactWhatsapp from "@/components/widgets/cards/CardContactWhatsapp";

import LogoNameWhite from "@/components/banner/logos/LogoNameWhite";

export default {
  components: {
    ShoppingCart,
    FormSearchWebsite,
    CardContactWhatsapp,
    LogoNameWhite
  }
};
</script>

<style scoped>
.header-middle {
  background: #282829;
}
.logo.logo-mrg {
  margin-top: 4px;
}
.header-search {
  margin-top: 3px;
}
.middle-same {
  display: inline-block;
  float: left;
  margin-left: 30px;
}
.middle-same:first-child,
.header-top-right ul li:first-child {
  margin-left: 0px;
}
</style>
