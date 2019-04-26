<template>
  <div class="header-cart">
    <button class="icon-cart">
      <i class="pe-7s-shopbag cart-bag"></i>
      <span class="count-amount" id="count-amount">{{ sumCart | toReal }}</span>
      <i class="ion-chevron-down cart-down"></i>
      <span class="count-style">{{ itemsCart.length }}</span>
    </button>
    <div class="shopping-cart-content">
      <slot name="list"></slot>
      <slot name="total">
        <div class="shopping-cart-total">
          <h4>
            Total :
            <span class="shop-total">{{ sumCart | toReal }}</span>
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
</style>
