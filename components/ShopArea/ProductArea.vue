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
  props: {
    products_new: Array, 
    products_hot: Array
  },
  components: {
    ProductList,
    TabPane,
    TabPaneTitleButton,
    TabPaneContent
  },
  data: () => ({
    idNews: "home1",
    idHots: "home2"
  })
};
</script>