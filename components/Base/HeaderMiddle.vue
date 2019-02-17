<template>
  <div class="header-middle ptb-40 header-middle-color">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <div class="logo logo-mrg">
            <nuxt-link to="/">
              <img src="/img/logo/name-white.png" width="250" height="60" alt="">
            </nuxt-link>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-12">
          <div class="header-contact-search-wrapper f-right">
            <div class="header-contact middle-same">
              <div class="header-contact-icon">
                <img src="/img/icon-img/whatsapp.png" width="40" height="40" alt="">
              </div>
              <div class="header-contact-content">
                <p>Fale Conosco <br>Whatsapp: (012) 98155-7110</p>
              </div>
            </div>
            <div class="header-search middle-same">
              <form class="header-search-form" action="#">
                <input type="text" placeholder="Procure toda loja aqui ...">
                <button>
                  <i class="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-middle {
    background: #282829;
}

p{
    color: #ddd;
}
.header-middle-color .header-search form input {
    border: 2px solid #ddd;
    color: #fff;
}
.header-middle-color button.icon-cart span.count-style{
    background-color: #3cb371;
    color: #fff;
    transition: all .3s ease 0s;
}

.header-middle-color button.icon-cart span.count-style:hover{
    background-color: #242424;
}

.header-middle-color .header-search form button {
    color: #242424;
    background-color: #ddd;
}
.header-middle-color .header-search form button:hover {
    background-color: #3cb371;
    color: #fff;
}

.logo.logo-mrg {
    margin-top: 4px;
}
.header-contact {
    margin-top: 8px;
}
.header-search {
    margin-top: 3px;
}
.header-contact-icon {
    display: inline-block;
    color: #ddd;
    float: left;
    margin-right: 14px;
}
.header-contact-icon i {
    font-size: 35px;
}
.header-contact-content {
    display: inline-block;
    float: left;
    overflow: hidden;
}
.header-contact-content > p {
    line-height: 18px;
    margin: 0;
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

.header-search form {
    position: relative
}
.header-search form input {
    background: transparent none repeat scroll 0 0;
    border: 2px solid #3cb371;
    box-shadow: none;
    color: #76b4fa;
    font-size: 13px;
    height: 45px;
    padding: 0px 45px 0 16px;
    width: 330px;
    border-radius: 0 7px 7px 0;
}
.header-search form input[type="text"]::-moz-placeholder {
    color: #fff !important;
    outline: 0 !important;
    border-width: 0 !important;
    opacity: 1;
}
.header-search form input[type="text"]::-webkit-input-placeholder {
    color: #fff !important;
    outline: 0 !important;
    border-width: 0 !important;
    opacity: 1;
}
.header-search form input[type="text"]::-ms-input-placeholder {
    color: #fff !important;
    outline: 0 !important;
    border-width: 0 !important;
    opacity: 1;
}
.header-search form button {
    background-color: #3cb371;
    border: medium none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    height: 100%;
    padding: 0 14px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all .3s ease 0s;
}
.header-search form button:hover {
    background-color: #fff;
    color: #3cb371;
}


.disabled {
  background: #dddddd;
  opacity: 0.65; 
  cursor: not-allowed;
}

</style>

<script>
import ShoppingCart from '~/components/Base/ShoppingCart.vue'

export default {
    components: {
        ShoppingCart
    }
}
</script>

