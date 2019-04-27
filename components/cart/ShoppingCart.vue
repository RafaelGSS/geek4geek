<template>
  <button-bag-cart class="header-cart">
    <template #content>
      <content-bag-cart/>
    </template>
    <template #addons>
      <a
        class="btn-style btn-hover"
        style="margin-top: 20px; margin-bottom: 15px;"
        href="#"
      >VER CARRINHO</a>
    </template>
  </button-bag-cart>
</template>

<script>
import ContentBagCart from "@/components/cart/ContentBagCart";
import ButtonBagCart from "@/components/cart/ButtonBagCart";

export default {
  components: {
    ButtonBagCart,
    ContentBagCart
  }
};
</script>

<style scoped>
.header-cart {
  position: relative;
}
</style>

