<template>
  <div class="shop-sidebar-wrapper gray-bg-7 mrg-top-md mrg-top-sm">
    <div class="shop-widget">
      <h4 class="shop-sidebar-title">Shop By Categories</h4>
      <div class="shop-category">
        <ul id="faq">
          <li>
            <a data-toggle="collapse" data-parent="#faq" href="#shop-category-1">
              Laptop &amp; Computer
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
    <ShopWidget :title="'Cores'" :type="'checkbox'" />
    <ShopWidget :title="'Tags'" :type="'tags'" />
  </div>
</template>

<style scoped>
.shop-sidebar-wrapper {
    border: 1px solid #efefef;
    padding: 17px 18px 29px;
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

</style>

<script>
import ShopWidget from '~/components/SidebarFilter/ShopWidget';

export default {
    components: {
        ShopWidget
    }

};
</script>


