<template>
  <ul>
    <li class="single-shopping-cart" v-for="(item, idx) in this.itemsCart" :key="idx">
      <div class="shopping-cart-img">
        <a href="#">
          <img alt src="/img/cart/cart-1.jpg">
        </a>
      </div>
      <div class="shopping-cart-title">
        <h4>
          <a href="#">{{ item.display_name }}</a>
        </h4>
        <h6>
          Quantidade:
          <span>{{ item.quantity }}</span>
        </h6>
        <span>Preço: {{ item.value | toReal }}</span>
      </div>
      <div class="shopping-cart-delete">
        <button-remove-item-cart :itemId="idx"/>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

import cashFormatter from "@/mixins/cashFormatter";

import ButtonRemoveItemCart from "@/components/cart/ButtonRemoveItemCart";

export default {
  mixins: [cashFormatter],
  components: {
    ButtonRemoveItemCart
  },
  computed: {
    ...mapGetters({
      itemsCart: "cart/items"
    })
  }
};
</script>

<style scoped>
ul li {
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
</style>
