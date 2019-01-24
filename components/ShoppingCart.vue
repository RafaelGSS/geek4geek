<template>
  <div class="header-cart middle-same">
    <button class="icon-cart">
      <i class="pe-7s-shopbag cart-bag"></i>
      <span
        class="count-amount"
        id="count-amount"
      >R$ {{ sumCart.toLocaleString("pt",{useGrouping: false,minimumFractionDigits: 2}) }}</span>
      <i class="ion-chevron-down cart-down"></i>
      <span class="count-style">{{ itemsCart.length }}</span>
    </button>
    <div class="shopping-cart-content">
      <ul>
        <li class="single-shopping-cart" v-for="(item, idx) in itemsCart" :key="idx">
          <div class="shopping-cart-img">
            <a href="#">
              <img alt src="/img/cart/cart-1.jpg">
            </a>
          </div>
          <div class="shopping-cart-title">
            <h4>
              <a href="#">{{ item.display_name }}</a>
            </h4>
            <h6>Quantidade:
              <span>{{ item.quantity }}</span>
            </h6>
            <span>Preço: R$ {{ item.value }}</span>
          </div>
          <div class="shopping-cart-delete">
            <a href="#" @click="removeItem(idx)">
              <i class="ion-android-close"></i>
            </a>
          </div>
        </li>
      </ul>
      <div class="shopping-cart-total">
        <h4>Total :
          <span
            class="shop-total"
            id="shop-total"
          >R$ {{ sumCart.toLocaleString("pt",{useGrouping: false,minimumFractionDigits: 2}) }}</span>
        </h4>
      </div>
      <div class="shopping-cart-btn">
        <a class="btn-style btn-hover" href="#">VER CARRINHO</a>
        <a class="btn-style btn-hover" href="#" v-if="itemsCart.length > 0">FINALIZAR COMPRA</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-middle-color .header-cart:hover button.icon-cart i.cart-bag,
.header-middle-color .header-cart:hover > button.icon-cart span.count-amount {
    color: #3cb371;
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
.header-cart {
    position: relative;
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

.middle-same {
    display: inline-block;
    float: left;
    margin-left: 30px;
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

