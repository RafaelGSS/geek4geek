<template>
  <div>
    <button class="icon-cart">
      <i class="pe-7s-shopbag cart-bag"></i>
      <span class="count-amount" id="count-amount">R$ 10,20</span>
      <!-- <span class="count-amount" id="count-amount">{{ sumCart }}</span> -->
      <i class="ion-chevron-down cart-down"></i>
      <span class="count-style">1</span>
      <!-- <span class="count-style">{{ itemsCart.length }}</span> -->
    </button>
    <div class="shopping-cart-content">
      <slot name="content"></slot>
      <slot name="total">
        <div class="shopping-cart-total">
          <h4>
            Total :
            <!-- <span class="shop-total">{{ sumCart }}</span> -->
            <span class="shop-total">R$ 10,20</span>
          </h4>
        </div>
      </slot>
      <slot name="addons"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button:hover .icon-cart i.cart-bag,
button:hover .icon-cart span.count-amount {
  color: #3cb371;
}

/* button.icon-cart i.cart-bag {
  border-right: 1px solid #ddd;
  color: #ddd;
} */
/* button.icon-cart span.count-amount {
  color: #ddd;
} */
button.icon-cart {
  background-color: transparent;
  border: 2px solid #3cb371;
  cursor: pointer;
  padding: 9px 12px 6px;
  position: relative;
}
button.icon-cart i.cart-down {
  color: #76b4fa;
  font-size: 12px;
  margin-left: 5px;
  position: relative;
  top: -6px;
}
button.icon-cart i.cart-bag {
  border-right: 1px solid #3cb371;
  color: #fff;
  font-size: 27px;
  margin-right: 7px;
  transition: all 0.3s ease 0s;
}
button.icon-cart span.count-amount {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  top: -6px;
  transition: all 0.3s ease 0s;
}
button.icon-cart span.count-style {
  background-color: #3cb371;
  border-radius: 100%;
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  height: 26px;
  left: -13px;
  line-height: 26px;
  position: absolute;
  top: -13px;
  width: 26px;
  color: #fff;
}

.shopping-cart-content::after {
  border-bottom: 8px solid #fff;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  content: "";
  height: 0;
  position: absolute;
  right: 35px;
  top: -8px;
  width: 0;
}
.shopping-cart-content {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  display: none;
  padding: 31px 35px 10px;
  position: absolute;
  right: 0;
  top: 100%;
  width: 340px;
  z-index: 9999;
}
.shopping-cart-total {
  margin: 25px 0 0;
}
.shopping-cart-total > h4 {
  font-size: 14px;
  margin-bottom: 17px;
}
.shopping-cart-total > h4:last-child {
  margin-bottom: 0px;
}
.shopping-cart-total > h4 span {
  float: right;
  color: #242424;
}
.shopping-cart-total > h4 span.shop-total {
  color: #3cb371;
  font-weight: 500;
}
</style>
