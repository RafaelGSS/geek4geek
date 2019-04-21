<template>
 <!-- REMOVER LINHA ACIMA DE TABPANE PRODUCT AREA -->
  <div class="prod">
    <image-product
      :href="product.href"
      :src="product.images[0].display_image"
      :alt="product.images[0].alt"
      :discount="product.promotion.percentage"
      class="product-img"
    />
    <div class="list-col">
      <div class="gridview">
        <div class="product-content text-center">
          <span v-for="category in product.categories" :key="category">{{ category }}</span>
          <h4>
            <a href="#">{{ product.name }}</a>
          </h4>
          <price :price="product.price" :oldPrice="product.promotion.old_price"></price>
        </div>
        <div class="product-action-wrapper-2 text-center">
          <div class="product-rating">
            <star-bordered :hasButton="true"></star-bordered>
            <star-bordered :hasButton="false"></star-bordered>
            <star-bordered :hasButton="false"></star-bordered>
            <star-bordered :hasButton="false"></star-bordered>
            <star-bordered :selected="false" :hasButton="false"></star-bordered>
          </div>
          <p>{{ product.display_description }}</p>
          <div class="product-action">
            <button-add-wishlist :id="product.id"/>
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

import BadgeDiscount from "@/components/ShopArea/BadgeDiscount";

import Price from "@/components/product-details/placeholders/Price";
import ImageProduct from "@/components/banner/images/ImageProduct";

export default {
  components: {
    StarBordered,
    ButtonAddCart,
    ButtonAddWishlist,
    BadgeDiscount,
    Price,
    ImageProduct
  },
  props: {
    product: Object
  }
};
</script>

<style scoped>
.product-img {
  padding: 10px 10px 0;
  position: relative;
}

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

.product-content {
  padding: 3px 18px 0;
}
.product-content {
  padding: 3px 28px 0;
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
</style>
