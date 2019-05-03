<template>
  <button-bag-cart class="header-cart">
    <template #content>
      <content-bag-cart/>
    </template>
    <template #addons>
      <button-default class="mb-5 mt-20">VER CARRINHO</button-default>
      <button-default class="mb-15">FINALIZAR COMPRA</button-default>
    </template>
  </button-bag-cart>
</template>

<script>
import ContentBagCart from "@/components/cart/ContentBagCart";
import ButtonBagCart from "@/components/cart/ButtonBagCart";
import ButtonDefault from "@/components/widgets/ButtonDefault";

export default {
  components: {
    ButtonBagCart,
    ContentBagCart,
    ButtonDefault
  }
};
</script>

<style scoped>
.header-cart {
  position: relative;
}
</style>

