<template>
  <div :class="this.classHover">
    <image-product
      :href="`/${product.unique_name}/p`"
      :src="this.imageDisplay"
      :alt="this.imageAlt"
      :discount="this.discount"
      class="product-img"
    />
    <div class="list-col">
      <div class="gridview">
        <slot name="content" :product="product">
          <div class="product-content text-center">
            <span
              v-for="category in product.categories"
              :key="`category-${category.category_name}`"
            >{{ category.category_name }}</span>
            <h4>
              <a href="#">{{ product.name }}</a>
            </h4>
            <price :price="product.price" :discount="this.discount"></price>
          </div>
        </slot>
        <slot name="action">
          <div class="product-action-wrapper text-center">
            <div class="product-rating" v-if="hasRatting">
              <star-bordered :hasButton="true"></star-bordered>
              <star-bordered :hasButton="false"></star-bordered>
              <star-bordered :hasButton="false"></star-bordered>
              <star-bordered :hasButton="false"></star-bordered>
              <star-bordered :selected="false" :hasButton="false"></star-bordered>
            </div>
            <slot name="description">
              <p>{{ product.display_description }}</p>
            </slot>
            <div class="product-action">
              <button-add-wishlist :id="product.id"/>
              <button-add-cart
                :id="product.id"
                :value="product.price"
                :display_name="product.name"
              >+ Carrinho</button-add-cart>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import StarBordered from "@/components/widgets/StarBordered";

import ButtonAddCart from "@/components/cart/ButtonAddCart";
import ButtonAddWishlist from "@/components/cart/ButtonAddWishlist";

import Price from "@/components/pages/product-details/placeholders/Price";
import ImageProduct from "@/components/banner/images/ImageProduct";

export default {
  components: {
    StarBordered,
    ButtonAddCart,
    ButtonAddWishlist,
    Price,
    ImageProduct
  },
  props: {
    product: Object,
    onHover: {
      type: Boolean,
      default: true
    },
    hasRatting: {
      type: Boolean,
      default: true
    },
    orientation: {
      type: String,
      default: "vertical",
      validator: val => ["vertical", "horizontal"].includes(val)
    }
  },
  computed: {
    discount() {
      return this.product.promo != null
        ? this.product.promo.promotion_percentage
        : null;
    },
    classHover() {
      let clsHover = this.onHover ? "prod" : "expanded";
      return `${clsHover} ${this.orientation}`;
    },
    imageDisplay() {
      const defaultDisplay = "/img/product/default.jpg";
      if (this.product.images.length == 0) {
        return defaultDisplay;
      }
      return this.product.images[0].display_image || defaultDisplay;
    },
    imageAlt() {
      return this.product.alt || "Imagem produto Geek4Geek";
    }
  }
};
</script>

<style scoped>
.vertical .list-col .gridview .product-content {
  padding: 3px 18px 0;
}

.vertical,
.horizontal {
  display: block;
}
.product-img {
  padding: 10px 10px 0;
  position: relative;
}
.product-action-wrapper > p {
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
.product-action-wrapper {
  margin: -181px -15px -15px;
  opacity: 0;
  padding: 26px 23px 0;
  transition: all 0.3s ease-out 0s;
}
.prod:hover .list-col .gridview {
  margin-bottom: -166px;
}
.prod:hover .product-action-wrapper,
.expanded .product-action-wrapper {
  margin: -15px;
  opacity: 1;
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

@media (min-width: 996px) {
  .horizontal {
    display: flex;
  }
  .horizontal .product-img {
    width: 60% !important;
  }
  .horizontal .list-col {
    width: 40% !important;
  }
}
</style>
