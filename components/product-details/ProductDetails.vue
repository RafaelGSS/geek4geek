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
                <input class="cart-plus-minus-box" type="number" name="quantity" v-model="this.quantity">
              </div>
              <div class="product-action">
                <button-add-cart :id=product.id :quantity="this.quantity" :value=product.price :display_name="product.display_name" />
                <a class="same-action" title="Wishlist" href="#">
                  <i class="fa fa-heart-o"></i>
                </a>
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
            <div class="pro-dec-social">
              <ul>
                <li>
                  <a class="share" href="#">
                    <i class="ion-social-facebook"></i> Share
                  </a>
                </li>
              </ul>
            </div>
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
    ButtonAddCart
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

.product-details-img {
  position: relative;
}

.product-details-content > h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.rating-review {
  display: flex;
}
.pro-dec-rating i {
  color: #b2b2b2;
  font-size: 17px;
}
.pro-dec-rating i.theme-star {
  color: #3cb371;
}
.product-details-content > span {
  color: #242424;
  font-size: 24px;
  font-weight: 500;
}
.rating-review {
  display: flex;
  margin: 20px 0 27px;
}
.product-details-content > p {
  color: #242424;
  margin: 0;
}
.in-stock > p {
  margin: 0;
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

.quality-add-to-cart .product-action > a.same-action {
  width: 40px;
  height: 40px;
}
.quality-add-to-cart .product-action > a.same-action i {
  line-height: 41px;
}
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
.pro-dec-social li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 6px 0 0;
}
.pro-dec-social li a {
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  line-height: 1;
  padding: 8px 12px;
}

.pro-dec-social li a.share {
  background-color: #435f9f;
  border: 1px solid transparent;
}
.pro-dec-social li a.share:hover {
  background-color: #242424;
  border: 1px solid #242424;
  color: #fff;
}

.pro-dec-social {
  margin: 27px 0 0;
}

.product-action {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
}
.product-action > a {
  margin: 0 3px;
}
.product-action > a i {
  text-align: center;
}
.product-action > a.same-action {
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  font-size: 16px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  width: 35px;
}


.product-action > a.action-cart:hover,
.product-action > a.same-action:hover {
  background-color: #3cb371;
  color: #fff;
}
</style>
