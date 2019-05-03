<template>
  <page>
    <full-banner/>
    <div class="shop-page-area pt-30 pb-65">
      <div class="container">
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
                <p>Showing 1 - 20 of 30 results</p>
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
import Page from "@/components/Page";

import FullBanner from "@/components/banner/FullBanner";
import ShopPageArea from "@/components/shop-area/ShopPageArea";

import ProductList from "@/components/shop-area/ProductList";
import SidebarFilter from "@/components/shop-area/sidebar/SidebarFilter";
import SortBy from "@/components/shop-area/sidebar/SortBy";

/**
 * GraphQL Queries
 */
import ProductsFromCategory from "@/apollo/queries/categories/ProductsFromCategory";

export default {
  components: {
    Page,
    ProductList,
    SidebarFilter,
    SortBy,
    FullBanner
  },
  data: function() {
    return {
      category: this.$route.params.category
    };
  },
  head() {
    return {
      title: `Categoria ${this.category}`
    };
  },
  apollo: {
    products: {
      prefetch: true,
      query: ProductsFromCategory,
      update: data => (data.category ? data.category.products : []),
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