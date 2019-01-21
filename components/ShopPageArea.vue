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
          <div class="shop-sidebar-wrapper gray-bg-7 mrg-top-md mrg-top-sm">
            <div class="shop-widget">
              <h4 class="shop-sidebar-title">Shop By Categories</h4>
              <div class="shop-category">
                <ul id="faq">
                  <li>
                    <a
                      data-toggle="collapse"
                      data-parent="#faq"
                      href="#shop-category-1"
                    >Laptop &amp; Computer
                      <i class="ion-ios-arrow-down"></i>
                    </a>
                    <ul id="shop-category-1" class="panel-collapse collapse show">
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Bags &amp; Cases</a>
                      </li>
                      <li>
                        <a href="#">Binoculars &amp; Scopes</a>
                      </li>
                      <li>
                        <a href="#">Digital Cameras</a>
                      </li>
                      <li>
                        <a href="#">Film Photography</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop-price-filter mt-40 shop-sidebar-border pt-35">
              <h4 class="shop-sidebar-title">Price Filter</h4>
              <div class="price_filter mt-25">
                <span>Range: $100.00 - 1.300.00</span>
                <div
                  id="slider-range"
                  class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                >
                  <div
                    class="ui-slider-range ui-widget-header ui-corner-all"
                    style="left: 25%; width: 41.6667%;"
                  ></div>
                  <span
                    class="ui-slider-handle ui-state-default ui-corner-all"
                    tabindex="0"
                    style="left: 25%;"
                  ></span>
                  <span
                    class="ui-slider-handle ui-state-default ui-corner-all"
                    tabindex="0"
                    style="left: 66.6667%;"
                  ></span>
                </div>
                <div class="price_slider_amount">
                  <div class="label-input">
                    <input type="text" id="amount" name="price" placeholder="Add Your Price">
                  </div>
                  <button type="button">Filter</button>
                </div>
              </div>
            </div>
            <div class="shop-widget mt-40 shop-sidebar-border pt-35">
              <h4 class="shop-sidebar-title">By Brand</h4>
              <div class="sidebar-list-style mt-20">
                <ul>
                  <li>
                    <input type="checkbox">
                    <a href="#">Samsung</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Panasonic</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Electrolux</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">LG</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Calvin Klein</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Diesel</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Polo</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Tommy Hilfiger</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop-widget mt-40 shop-sidebar-border pt-35">
              <h4 class="shop-sidebar-title">By Color</h4>
              <div class="sidebar-list-style mt-20">
                <ul>
                  <li>
                    <input type="checkbox">
                    <a href="#">Black</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Green</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Grey</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Red</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">White</a>
                  </li>
                  <li>
                    <input type="checkbox">
                    <a href="#">Yellow</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="shop-widget mt-40 shop-sidebar-border pt-35">
              <h4 class="shop-sidebar-title">Popular Tags</h4>
              <div class="shop-tags mt-25">
                <ul>
                  <li>
                    <a href="#">Computer</a>
                  </li>
                  <li>
                    <a href="#">Cameras</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Big Sale</a>
                  </li>
                  <li>
                    <a href="#">Sony</a>
                  </li>
                  <li>
                    <a href="#">Devita</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop-sidebar-wrapper {
    border: 1px solid #efefef;
    padding: 17px 18px 29px;
}
h4.shop-sidebar-title {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
}
.shop-category > ul {
    border-top: 1px solid #ebebeb;
    margin: 18px 0 0;
    padding: 27px 0 0;
}
.shop-category ul > li {
    display: block;
    list-style: outside none none;
    padding: 0 0 13px;
}
.shop-category ul > li:last-child {
    padding: 0 0 0px;
}
.shop-category ul > li ul li:last-child {
    padding: 7px 0 0 15px;
}
.shop-category ul > li a {
    color: #242424;
    display: block;
}
.shop-category ul li:hover > a {
    color: #047afe;
}
.shop-category ul li:hover > a i {
    color: #047afe;
}
.shop-category ul > li a i {
    float: right;
    color: #7a7a7a;
    font-size: 14px;
}
.shop-category ul > li > ul li {
    padding: 7px 0 0 15px;
}
.shop-category ul > li ul li a {
    color: #666;
}
.price_filter .ui-slider.ui-slider-horizontal.ui-widget.ui-widget-content.ui-corner-all {
    background: #dbdbdb none repeat scroll 0 0;
    border: medium none;
    border-radius: 50px;
    height: 5px;
    margin-bottom: 12px;
    margin-left: auto;
}
.price_filter .ui-slider-range {
    background: #0363cd none repeat scroll 0 0;
}
.price_filter .ui-slider-handle.ui-state-default.ui-corner-all {
    background: #0363cd none repeat scroll 0 0;
    border: 2px solid #fff;
    border-radius: 100%;
    height: 15px;
    width: 15px;
}
.ui-slider-horizontal .ui-slider-handle {
    top: -6px;
}
.price_filter.mt-40 > span {
    color: #242424;
    display: block;
    margin-bottom: 30px;
}
.price_slider_amount .label-input input {
    background: transparent none repeat scroll 0 0;
    border: medium none;
    box-shadow: none;
    color: #363f4d;
    font-size: 14px;
    height: auto;
    margin: 3px 0 14px;
    padding-left: 49px;
    width: 100%;
}
.price_slider_amount > button {
    background-color: #242424;
    border: medium none;
    border-radius: 5px;
    color: #fff;
    line-height: 1;
    padding: 8px 16px;
    cursor: pointer;
    transition: all .3s ease 0s;
}
.price_slider_amount > button:hover {
    background-color: #047afe;
}
.price_filter > span {
    color: #242424;
    display: block;
    margin: 0 0 21px;
}
.shop-sidebar-border {
    border-top: 1px solid #ebebeb;
}
.sidebar-list-style ul li {
    display: block;
    list-style: outside none none;
    padding: 0 0 6px;
}
.sidebar-list-style ul li a {
    color: #242424;
}
.sidebar-list-style ul li a:hover {
    color: #0363cd;
}
.sidebar-list-style ul li:last-child {
    padding: 0 0 0px;
}
.sidebar-list-style ul li input {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 1px solid #d7d7d7;
    float: left;
    height: 17px;
    margin: 3px 12px 0 0;
    padding-left: 0;
    width: 17px;
    cursor: pointer;
}
.shop-tags li {
    display: inline-block;
    list-style: outside none none;
    margin: 0 4px 11px 0;
}
.shop-tags a {
    border: 1px solid #ebebeb;
    color: #242424;
    display: inline-block;
    line-height: 1;
    padding: 8px 12px;
}
.shop-tags a:hover {
    border: 1px solid #047afe;
    background-color: #047afe;
    color: #fff;
}

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

export default {
    props: ['products'],
    components: {
        ProductList
    }
};
</script>


