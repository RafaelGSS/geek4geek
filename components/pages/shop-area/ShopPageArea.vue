<template>
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
          <product-list :products="products" :itemsPerRow="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/pages/product/ProductList";

import SidebarFilter from "@/components/pages/shop-area/sidebar/SidebarFilter";
import SortBy from "@/components/pages/shop-area/sidebar/SortBy";

import FullBanner from "@/components/banner/FullBanner";

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductList,
    SidebarFilter,
    SortBy,
    FullBanner
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
