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
            <div class="product-sorting-wrapper">
              <div class="product-show shorting-style">
                <label>Sort by:</label>
                <select>
                  <option value>Default</option>
                  <option value>Name</option>
                  <option value>price</option>
                </select>
              </div>
            </div>
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
.shorting-style {
    display: inline-block;
    margin-left: 20px;
}
.product-shorting.shorting-style {
    margin-left: 0;
}
.shorting-style > label {
    color: #242424;
    cursor: pointer;
    margin: 0 11px 0 0;
}
.product-shorting.shorting-style select {
    width: 110px;
}
.shorting-style select {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: #fff url("/img/icon-img/shop.png") no-repeat scroll right 10px center;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-shadow: none;
    color: #898888;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    padding-left: 10px;
    width: 210px;
}
</style>

<script>
import ProductList from "~/components/ProductList";
import SidebarFilter from "~/components/SidebarFilter/SidebarFilter";

export default {
    props: ['products'],
    components: {
        ProductList, SidebarFilter
    }
};
</script>


