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
            <h4>{{ product.name }}</h4>
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
                <stock :stock="product.stock"/>
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
                <button-add-cart
                  :id="product.id"
                  :quantity="this.quantity"
                  :value="product.price"
                  :display_name="product.display_name"
                />
                <button-add-wishlist style="padding: 8px 8px 8px;" :id="product.id"/>
              </div>
            </div>
            <simple-list :items="product.categories">
              <template slot="title">Categorias:</template>
              <template v-slot:item="{ item }">
                <a href="#">{{ item.category_name }}</a>
              </template>
            </simple-list>
            <simple-list :items="product.tags">
              <template slot="title">Tags:</template>
              <template v-slot:item="{ item }">
                <a href="#">{{ item.tag_name }}</a>
              </template>
            </simple-list>
            <share-social-icons/>
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
import SimpleList from "@/components/widgets/list/SimpleList";
import ButtonAddCart from "@/components/cart/ButtonAddCart";
import ButtonAddWishlist from "@/components/cart/ButtonAddWishlist";
import ShareSocialIcons from "@/components/widgets/ShareSocialIcons";

import Star from "@/components/widgets/Star";

export default {
  props: {
    product: Object // { id: 1, images: [], tags: [], categories: [], name: "", price: "": stock: 1, display_description: ""}
  },
  components: {
    ZoomPro,
    Star,
    Stock,
    ProductDescription,
    ButtonAddCart,
    ButtonAddWishlist,
    ShareSocialIcons,
    SimpleList
  },
  data: () => ({
    quantity: "1"
  })
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
</style>
