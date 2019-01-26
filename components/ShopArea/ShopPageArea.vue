<template>
  <div class="shop-page-area pt-30 pb-65">
    <div class="container">
      <div class="row flex-row-reverse">
        <div class="col-lg-9">
          <div class="banner-area pb-30">
            <a href="#">
              <img alt src="/img/banner/banner-49.jpg">
            </a>
          </div>
          <div class="shop-topbar-wrapper">
            <div class="shop-topbar-left">
              <p>Showing 1 - 20 of 30 results</p>
            </div>
            <SortBy />
          </div>
          <ProductList :products=products :itemsPerRow=4 />
        </div>
        <div class="col-lg-3">
          <SidebarFilter />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.banner-area.pb-30 img {
    width: 100%;
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

<script>
import ProductList from "~/components/ShopArea/ProductList";
import SidebarFilter from "~/components/ShopArea/SidebarFilter/SidebarFilter";
import SortBy from "~/components/Sort/SortBy";

export default {
    props: ['products'],
    components: {
        ProductList, SidebarFilter, SortBy
    }
};
</script>


