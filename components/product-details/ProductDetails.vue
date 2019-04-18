<template>
  <div class="product-details pt-65 pb-65">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="product-details-img">
            <zoom-pro :principalImg="product.images[0]" :gallery="product.images"/>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="product-details-content">
            <h4>{{ product.display_name }}</h4>
            <div class="rating-review">
              <div class="pro-dec-rating">
                <star :hasButton="false"></star>
                <star :hasButton="false"></star>
                <star :hasButton="false"></star>
                <star :hasButton="false"></star>
                <star :hasButton="false"></star>
              </div>
            </div>
            <span>R$ {{ product.price }}</span>
            <div class="in-stock">
              <p>
                Estoque:
                <stock :stock="product.stock" />
              </p>
            </div>
            <product-description>
              <p style="min-height: 100px">{{ product.display_description }}</p>
            </product-description>
            <div class="quality-add-to-cart">
              <div class="quality">
                <label>Quantidade:</label>
                <input class="cart-plus-minus-box" type="number" v-model="this.quantity">
              </div>
              <div class="product-action">
                <button-add-cart :id=product.id :quantity="this.quantity" :value=product.price :display_name="product.display_name" />
                <button-add-wishlist :id="product.id"/>
              </div>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Categorias:</li>
                <li v-for="(category, index) in product.categories" :key="`det-cat-${index}`">
                  <a href="#">{{ category.name }}</a>
                </li>
              </ul>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Tags:</li>
                <li v-for="tag in product.tags" :key="tag.id">
                  <a href="#">{{ tag.name }}</a>
                </li>
              </ul>
            </div>
            <share-social-icons />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZoomPro from "@/components/banner/images/ZoomPro";
import ProductDescription from "@/components/product-details/ProductDescription";
import Stock from "@/components/product-details/placeholders/Stock";

import ButtonAddCart from "@/components/cart/ButtonAddCart";
import ButtonAddWishlist from "@/components/cart/ButtonAddWishlist";
import ShareSocialIcons from "@/components/widgets/ShareSocialIcons";

import Star from "@/components/widgets/Star";

export default {
  props: {
    product: Object
  },
  components: {
    ZoomPro,
    Star,
    Stock,
    ProductDescription,
    ButtonAddCart,
    ButtonAddWishlist,
    ShareSocialIcons
  },
  data: () => ({
    quantity: "1"
  }),
  methods: {
   
  }
};
</script>


<style scoped>
.product-details-content {
  position: relative;
}

.product-details-content > h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.product-details-content > span {
  color: #242424;
  font-size: 24px;
  font-weight: 500;
}

.product-details-content > p {
  color: #242424;
  margin: 0;
}

.product-details-img {
  position: relative;
}

.rating-review {
  display: flex;
  margin: 20px 0 27px;
}

.in-stock {
  margin: 27px 0 3px;
}
.quality input {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #e1e1e1;
  color: #242424;
  height: 40px;
  padding: 0;
  text-align: center;
  width: 40px;
}

.quality input::-moz-placeholder {
  color: #242424;
  opacity: 1;
}
.quality input::-webkit-input-placeholder {
  color: #242424;
  opacity: 1;
}
.quality label {
  color: #242424;
  font-size: 14px;
  margin: 0 26px 0 0;
}
.quality {
  display: inline-block;
  float: left;
  margin: 0 15px 0 0;
}
.quality-add-to-cart {
  border-top: 1px solid #ebebeb;
  display: block;
  overflow: hidden;
  padding: 40px 0 37px;
}
.quality-add-to-cart .product-action {
  justify-content: left;
}
/*List*/
.pro-dec-categories li {
  display: inline-block;
  list-style: outside none none;
  color: #242424;
}
.pro-dec-categories li.categories-title {
  margin: 0 3px 0 0;
}
.pro-dec-categories li a {
  color: #242424;
}
.pro-dec-categories li a:hover {
  color: #3cb371;
}
.pro-dec-categories {
  margin: 0 0 12px;
}
.pro-dec-categories:last-child {
  margin: 0 0 0px;
}
</style>
