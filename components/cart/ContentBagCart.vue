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
        <span>Preço: R$ {{ item.value }}</span>
      </div>
      <div class="shopping-cart-delete">
        <a href="#" @click="removeItem(idx)">
          <i class="ion-android-close"></i>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    itemsCart: [
      {
        display_name: "Produto G4G",
        quantity: 1,
        value: 10.20
      }
    ]
  })
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
</style>
