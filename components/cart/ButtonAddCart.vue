<template>
  <a href="#add-cart" title="Adicionar ao carrinho" class="action-cart" @click="addCart">
    <slot>Add to Cart</slot>
  </a>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: {
      required: true
    },
    quantity: {
      default: 1
    },
    display_name: String,
    value: Number
  },
  methods: {
    ...mapActions({
      add: "cart/addToCart"
    }),
    addCart() {
      this.$notify({
        group: "general",
        type: "success",
        title: `Item ${this.display_name} adicionado`,
        text: "O Item foi adicionado com sucesso do seu carrinho de compras!"
      });
      this.add({
        id: this.id,
        quantity: this.quantity,
        display_name: this.display_name,
        value: this.value
      });
    }
  }
};
</script>

<style scoped>
a {
  padding: 11px 40px 10px;
  margin: 0 3px;
}

a.action-cart {
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 9px 20px 8px;
  text-transform: uppercase;
}

a.action-cart:hover {
  background-color: #3cb371;
  color: #fff;
}
</style>


