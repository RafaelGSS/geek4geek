<template>
  <button-bag-cart class="header-cart">
    <template #content>
      <content-bag-cart items/>
    </template>
    <template #addons>
      <button-show-cart style="margin-top: 20px;"/>
    </template>
  </button-bag-cart>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ButtonShowCart from "@/components/cart/ButtonShowCart";
import ContentBagCart from "@/components/cart/ContentBagCart";
import ButtonBagCart from "@/components/cart/ButtonBagCart";

export default {
  components: {
    ButtonShowCart,
    ButtonBagCart,
    ContentBagCart
  },
  computed: {
    ...mapGetters({
      itemsCart: "cart/items",
      sumCart: "cart/sum"
    })
  },
  methods: {
    ...mapActions({
      remove: "cart/removeToCart"
    }),
    removeItem(idx) {
      this.$notify({
        group: "general",
        type: "info",
        title: "Item removido",
        text: "O Item foi removido com sucesso do seu carrinho de compras!"
      });
      this.remove(idx);
    }
  },
  filters: {
    toReal: value => {
      value = value.toLocaleString("pt", {
        useGrouping: false,
        minimumFractionDigits: 2
      });
      return "R$ " + value;
    }
  }
};
</script>

<style scoped>

.header-cart {
  position: relative;
}
</style>

