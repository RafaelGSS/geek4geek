<template>
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
};
</script>

<style scoped>
</style>
