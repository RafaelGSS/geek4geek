<template>
  <page>
    <full-banner src="/img/banner/banner-80.jpg" alt="Banner Categories"/>
    <no-ssr>
      <vue-element-loading :active="!this.loaded" is-full-screen>
        <img src="/gif/pikachu-loading.gif">
      </vue-element-loading>
    </no-ssr>
    <div class="shop-page-area pt-30 pb-65">
      <div class="container" v-if="this.loaded">
        <div class="row flex-row">
          <div class="col-lg-3">
            <sidebar-filter/>
          </div>
          <div class="col-lg-9">
            <a href="#" class="display-desktop">
              <full-banner src="/img/banner/banner-49.jpg" alt/>
            </a>
            <div class="shop-topbar-wrapper">
              <div class="shop-topbar-left">
                <p>Showing 1 - 20 of {{ this.totalProducts }} results</p>
              </div>
              <sort-by/>
            </div>
            <product-list :products="products" :itemsPerRow="4"/>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import isLoading from "@/mixins/isLoading";

import Page from "@/components/Page";

import FullBanner from "@/components/banner/FullBanner";
import ShopPageArea from "@/components/shop-area/ShopPageArea";

import ProductList from "@/components/shop-area/ProductList";
import SidebarFilter from "@/components/shop-area/sidebar/SidebarFilter";
import SortBy from "@/components/shop-area/sidebar/SortBy";

import { get } from "lodash";
/**
 * GraphQL Queries
 */
import ProductsFromCategory from "@/apollo/queries/categories/ProductsFromCategory";

export default {
  mixins: [isLoading],
  watchQuery: true,
  head() {
    return {
      title: `Categoria ${this.category}`
    };
  },
  components: {
    Page,
    ProductList,
    SidebarFilter,
    SortBy,
    FullBanner
  },
  data: function() {
    return {
      category: this.$route.params.category,
      totalProducts: 0
    };
  },
  apollo: {
    products: {
      prefetch: true,
      query: ProductsFromCategory,
      // fetchPolicy: 'network-only',
      update: data => get(data, "category.products", []),
      variables() {
        return { categoryName: this.category };
      }
    }
  }
};
</script>

<style scoped>
@media (max-width: 991px) {
  .display-desktop {
    display: none;
  }
}

.shop-topbar-wrapper {
  border: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 15px 24px;
}

.shop-topbar-left > p {
  display: inline-block;
  margin: 3px 0 0;
}
</style>