<template>
  <div class="product-area pt-35 pb-30">
    <div class="container">
      <tab-pane>
        <template #title>
          <tab-pane-title-button :active="true" :id="'tab-news'">Novas Chegadas</tab-pane-title-button>
          <tab-pane-title-button :id="'tab-hots'">Destaques</tab-pane-title-button>
        </template>
        <template #content>
          <tab-pane-content :active="true" :id="'tab-news'">
            <ProductList
              :products="products_new"
              :idContainer="idNews"
              :isActive="true"
              :itemsPerRow="5"
            />
          </tab-pane-content>
          <tab-pane-content :id="'tab-hots'">
            <ProductList
              :products="products_hot"
              :idContainer="idHots"
              :isActive="true"
              :itemsPerRow="5"
            />
          </tab-pane-content>
        </template>
      </tab-pane>
    </div>
  </div>
</template>

<script>
import ProductList from "~/components/ShopArea/ProductList.vue";

import TabPane from "@/components/widgets/TabPane";
import TabPaneTitleButton from "@/components/widgets/TabPaneTitleButton";
import TabPaneContent from "@/components/widgets/TabPaneContent";

export default {
  components: {
    ProductList,
    TabPane,
    TabPaneTitleButton,
    TabPaneContent
  },
  props: ["products_new", "products_hot"],
  data: () => ({
    idNews: "home1",
    idHots: "home2"
  }),
  methods: {
    addCart(obj) {
      this.$notify({
        group: "general",
        type: "success",
        title: "Item adicionado",
        text: "O Item foi adicionado com sucesso do seu carrinho de compras!"
      });
      this.$store.commit("cart/add", obj);
    },
    showNews() {
      document.getElementById(this.idNews).classList.add("active");
      document.getElementById(this.idHots).classList.remove("active");
    },
    showHots() {
      document.getElementById(this.idHots).classList.add("active");
      document.getElementById(this.idNews).classList.remove("active");
    }
  }
};
</script>

<style scoped>
.product-tab-list {
  display: flex;
  justify-content: center;
  position: relative;
}

.product-tab-list {
  display: flex;
  justify-content: center;
  position: relative;
}
.product-tab-list::before,
.product-tab-list::after {
  background-color: #eee;
  content: "";
  height: 1px;
  position: absolute;
  top: 25px;
  transition: all 0.4s ease 0s;
  width: 300px;
}
.product-tab-list::before {
  left: 0px;
}
.product-tab-list::after {
  right: 0px;
}
.product-tab-list > a {
  margin: 0 5px;
}
.product-tab-list > a h4 {
  border: 2px solid #eee;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  padding: 13px 32px 12px;
  transition: all 0.3s ease 0s;
}
.product-tab-list > a.active h4 {
  border: 2px solid #3cb371;
  color: #3cb371;
}
</style>
