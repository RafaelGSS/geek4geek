<template>
  <a href="#" title="Remover item" @click="removeItem">
    <i class="ion-android-close"></i>
  </a>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    itemId: Number
  },
  methods: {
    ...mapActions({
      remove: "cart/removeToCart"
    }),
    removeItem() {
      this.$notify({
        group: "general",
        type: "info",
        title: "Item removido",
        text: "O Item foi removido com sucesso do seu carrinho de compras!"
      });
      this.remove(this.itemId);
    }
  }
};
</script>

<style scoped>
a {
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
a:hover {
  border: 2px solid #3cb371;
  color: #3cb371;
}
</style>
