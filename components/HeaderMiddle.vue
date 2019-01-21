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
                <i class="pe-7s-headphones"></i>
              </div>
              <div class="header-contact-content">
                <p>Ligue para nosso <br>Suporte Grátis: (012) 98155-7110</p>
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
            <div class="header-cart middle-same">
              <button class="icon-cart">
                <i class="pe-7s-shopbag cart-bag"></i>
                <span class="count-amount" id="count-amount">R$ {{ sumCart.toLocaleString("pt",{useGrouping: false,minimumFractionDigits: 2}) }}</span>
                <i class="ion-chevron-down cart-down"></i>
                <span class="count-style">{{ itemsCart.length }}</span>
              </button>
              <div class="shopping-cart-content">
                <ul>
                  <li class="single-shopping-cart" v-for="(item, idx) in itemsCart" :key="idx">
                    <div class="shopping-cart-img">
                      <a href="#"><img alt="" src="/img/cart/cart-1.jpg"></a>
                    </div>
                    <div class="shopping-cart-title">
                      <h4><a href="#">{{ item.display_name }}</a></h4>
                      <h6>Quantidade: <span>{{ item.quantity }}</span></h6>
                      <span>Preço: R$ {{ item.value }}</span>
                    </div>
                    <div class="shopping-cart-delete">
                        <a href="#" @click="removeItem(idx)"><i class="ion-android-close"></i></a>
                    </div>
                  </li>
                </ul>
                <div class="shopping-cart-total">
                  <h4>Total : <span class="shop-total" id="shop-total">R$ {{ sumCart.toLocaleString("pt",{useGrouping: false,minimumFractionDigits: 2}) }}</span></h4>
                </div>
                <div class="shopping-cart-btn">
                  <a class="btn-style btn-hover" href="#">VER CARRINHO</a>
                  <a class="btn-style btn-hover" href="#" v-if="itemsCart.length > 0">FINALIZAR COMPRA</a>
                </div>
              </div>
            </div>
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
.header-middle-color .header-search form input,
.header-middle-color-6 .header-search form input,
.middle-yellowgreen-color .header-search form input {
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
.header-middle-color button.icon-cart,
.header-middle-color-6 button.icon-cart,
.middle-yellowgreen-color button.icon-cart {
    border: 2px solid #3cb371;
}
.header-middle-color button.icon-cart i.cart-bag {
    border-right: 1px solid #ddd;
    color: #ddd;
}
.header-middle-color button.icon-cart span.count-amount,
.header-middle-color-6 button.icon-cart span.count-amount {
    color: #ddd;
}
.header-middle-color button.icon-cart i.cart-down {
    color: #fff;
}
.header-middle-color .header-cart:hover button.icon-cart i.cart-bag,
.header-middle-color .header-cart:hover > button.icon-cart span.count-amount {
    color: #3cb371;
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
.header-cart {
    position: relative;
}
button.icon-cart {
    background-color: transparent;
    border: 2px solid #3cb371;
    cursor: pointer;
    padding: 9px 12px 6px;
    position: relative;
}
button.icon-cart i.cart-bag {
    color: #fff;
    font-size: 27px;
}
button.icon-cart i.cart-down {
    color: #76b4fa;
    font-size: 12px;
    margin-left: 5px;
    position: relative;
    top: -6px;
}
button.icon-cart i.cart-bag {
    border-right: 1px solid #3cb371;
    color: #fff;
    font-size: 27px;
    margin-right: 7px;
    transition: all .3s ease 0s;
}
button.icon-cart span.count-amount {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    top: -6px;
    transition: all .3s ease 0s;
}
button.icon-cart span.count-style {
    background-color: #3cb371;
    border-radius: 100%;
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    height: 26px;
    left: -13px;
    line-height: 26px;
    position: absolute;
    top: -13px;
    width: 26px;
    color: #fff;
}
.header-cart:hover button.icon-cart i.cart-bag,
.header-cart:hover > button.icon-cart span.count-amount {
    color: #ddd;
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
.shopping-cart-content {
    background: #fff none repeat scroll 0 0;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    display: none;
    padding: 31px 35px 10px;
    position: absolute;
    right: 0;
    top: 100%;
    width: 340px;
    z-index: 9999;
}
.shopping-cart-content::after {
    border-bottom: 8px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    content: "";
    height: 0;
    position: absolute;
    right: 35px;
    top: -8px;
    width: 0;
}
.shopping-cart-content ul li {
    border-bottom: 1px solid #ebebeb;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding-bottom: 15px;
}
.shopping-cart-img {
    flex: 0 0 82px;
    margin-right: 15px;
}
.shopping-cart-title > h4 {
    color: #242424;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
}
.shopping-cart-title > h4 a {
    color: #242424;
    display: block;
}
.shopping-cart-title > h4 a:hover {
    color: #3cb371;
}
.shopping-cart-title > h6 {
    color: #555;
    font-size: 13px;
    margin: 5px 0 10px;
}
.shopping-cart-title > span {
    color: #555;
    font-size: 14px;
}
.shopping-cart-delete {
    display: flex;
    flex-grow: 100;
    justify-content: flex-end;
}
.shopping-cart-delete > a {
    border: 2px solid #999;
    border-radius: 50px;
    color: #666;
    display: inline-block;
    font-size: 12px;
    height: 20px;
    line-height: 15px;
    margin-top: 2px;
    text-align: center;
    width: 20px;
}
.shopping-cart-delete > a:hover {
    border: 2px solid #3cb371;
    color: #3cb371;
}
.shopping-cart-total {
    margin: 25px 0 0;
}
.shopping-cart-total > h4 {
    font-size: 14px;
    margin-bottom: 17px;
}
.shopping-cart-total > h4:last-child {
    margin-bottom: 0px;
}
.shopping-cart-total > h4 span {
    float: right;
    color: #242424;
}
.shopping-cart-total > h4 span.shop-total {
    color: #3cb371;
    font-weight: 500;
}
.shopping-cart-btn {
    margin-top: 23px;
}
.shopping-cart-btn a {
    margin-bottom: 15px;
}
.disabled {
  background: #dddddd;
  opacity: 0.65; 
  cursor: not-allowed;
}

</style>

<script>
import { mapGetters } from 'vuex'

export default {
    mounted() {
        /* Cart */
        $(".icon-cart").on("click", function() {
            $(this).parent().find('.shopping-cart-content').slideToggle('medium');
        });
    },
    computed: {
        ...mapGetters({
            itemsCart: 'cart/items',
            sumCart: 'cart/sum'
        }),
    },
    methods: {
        removeItem(idx){
            this.$notify({
                group: 'general',
                type: 'info',
                title: 'Item removido',
                text: 'O Item foi removido com sucesso do seu carrinho de compras!'
            });
            this.$store.commit('cart/remove', idx)
        }
    }
}
</script>

