<template>
  <div class="description-review-area pt-25 pb-70">
    <div class="container">
      <tab-pane>
        <template #title>
          <tab-pane-title :active="true" :id="'tab-description'">Descrição</tab-pane-title>
          <tab-pane-title :id="'tab-review'">Reviews</tab-pane-title>
        </template>
        <template #content>
          <tab-pane-content :active="true" :id="'tab-description'">
            <product-description>
              <p>{{ full_description }}</p>
            </product-description>
          </tab-pane-content>
          <tab-pane-content :id="'tab-review'">
            <product-review :reviews="reviews"/>
          </tab-pane-content>
        </template>
      </tab-pane>
    </div>
  </div>
</template>

<script>
import TabPane from "@/components/widgets/TabPane";
import TabPaneTitle from "@/components/widgets/TabPaneTitle";
import TabPaneContent from "@/components/widgets/TabPaneContent";

import ProductReview from "@/components/pages/product-details/ProductReview";
import ProductDescription from "@/components/pages/product-details/ProductDescription";

export default {
  components: {
    ProductReview,
    ProductDescription,
    TabPane,
    TabPaneTitle,
    TabPaneContent
  },
  props: {
    full_description: String,
    reviews: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
</style>
