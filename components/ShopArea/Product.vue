<template>
  <div class="prod">
    <div class="product-img">
      <div class="product-img-slider">
        <a :href="product.href">
          <img :src="product.images[0].display_image" :alt="product.images[0].alt">
        </a>
      </div>
      <!-- BADGE DISCOUNT -->
      <span v-if="product.promo">-{{ product.promotion.percentage }}%</span>
    </div>
    <div class="list-col">
      <div class="gridview">
        <div class="product-content text-center">
          <span v-for="category in product.categories" :key="category">{{ category }}</span>
          <h4>
            <a href="#">{{ product.name }}</a>
          </h4>
          <!-- Placeholder/Price -->
          <div class="product-price-wrapper">
            <span>R$ {{ product.price }}</span>
            <span
              class="product-price-old"
              v-if="product.promo"
            >R$ {{ product.promotion.old_price }}</span>
          </div>
        </div>
        <div class="product-action-wrapper-2 text-center">
          <div class="product-rating">
            <star-bordered :hasButton="true"></star-bordered>
            <star-bordered :hasButton="false"></star-bordered>
            <star-bordered :hasButton="false"></star-bordered>
            <star-bordered :hasButton="false"></star-bordered>
            <star-bordered :selected="true" :hasButton="false"></star-bordered>
          </div>
          <p>{{ product.display_description }}</p>
          <div class="product-action">
            <button-add-wishlist :id="product.id"></button-add-wishlist>
            <button-add-cart
              :id="product.id"
              :value="product.price"
              :display_name="product.display_name"
            >+ Carrinho</button-add-cart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarBordered from "@/components/widgets/StarBordered";
import ButtonAddCart from "@/components/cart/ButtonAddCart";
import ButtonAddWishlist from "@/components/cart/ButtonAddWishlist";

export default {
  components: {
    StarBordered,
    ButtonAddCart,
    ButtonAddWishlist
  },
  props: {
    product: Object
  }
};
</script>

<style scoped>
.product-action-wrapper-2 > p {
  color: #242424;
  font-size: 12px;
  line-height: 18px;
  margin: 9px 0 17px;
}

.list-col .gridview {
  display: block;
  margin: 0;
  padding: 0px 5px 30px;
  position: relative;
  text-align: center;
  transition: all 0.3s ease-out 0s;
}
.prod:hover .list-col .gridview {
  margin-bottom: -166px;
}
.product-action-wrapper-2 {
  margin: -181px -15px -15px;
  opacity: 0;
  padding: 26px 23px 0;
  transition: all 0.3s ease-out 0s;
}
.prod:hover .product-action-wrapper-2 {
  margin: -15px;
  opacity: 1;
}

.product-img {
  padding: 10px 10px 0;
  position: relative;
}
.product-img img {
  width: 100%;
}
.product-content {
  padding: 3px 18px 0;
}
.product-content {
  padding: 3px 28px 0;
}
.product-img > span {
  background-color: #3cb371;
  border-radius: 3px;
  color: #fff;
  left: 15px;
  line-height: 1;
  padding: 6px 14px 5px;
  position: absolute;
  top: 15px;
  z-index: 99;
}
.product-content > span {
  color: #555;
  font-size: 13px;
}
.product-content > h4 {
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0 13px;
}
.product-content > h4 a:hover {
  color: #3cb371;
}
.product-price-wrapper > span {
  color: #242424;
  margin: 0 2px;
}
.product-price-wrapper > span.product-price-old {
  text-decoration: line-through;
}
.product-action-wrapper > p {
  color: #242424;
  font-size: 12px;
  line-height: 18px;
  margin: 9px 0 17px;
}
.product-action {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
}
.star-pattern {
  margin: 0 3px;
  text-align: center;
}
.product-rating {
  position: relative;
}
.product-rating::before,
.product-rating::after {
  background-color: #eef0f1;
  content: "";
  height: 1px;
  position: absolute;
  top: 11px;
  transition: all 0.4s ease 0s;
  width: 52px;
}
.product-rating::before {
  left: 0;
}
.product-rating::after {
  right: 0;
}
.product-price-wrapper {
  display: block;
  transition: all 0.3s ease 0s;
}
</style>
