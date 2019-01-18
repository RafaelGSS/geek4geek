<template>
  <div class="product-details pt-65 pb-65">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="product-details-img">
            <div class="zoompro-border zoompro-span">
              <img
                class="zoompro"
                :src="pProduct.images[0].display_image"
                :data-zoom-image="pProduct.images[0].big_display_image"
                :alt="pProduct.images[0].alternate_text"
              >
              <span v-if="pProduct.promotion.enabled">-{{ pProduct.promotion.percentage }}%</span>
            </div>
            <div id="gallery" class="product-dec-slider">
              <a v-for="image in pProduct.images" :key="image.id" :data-image="image.display_image" :data-zoom-image="image.big_display_image">
                <img :src="image.low_display_image" :alt="image.alternate_text">
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="product-details-content">
            <h4>{{ pProduct.display_name }}</h4>
            <div class="rating-review">
              <div class="pro-dec-rating">
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline"></i>
              </div>
              <div class="pro-dec-review">
                <ul>
                  <a href="#"><li>Adicionar Review</li></a>
                </ul>
              </div>
            </div>
            <span>R$ {{ pProduct.price }}</span>
            <div class="in-stock">
              <p>
                Estoque:
                <span v-if="pProduct.stock > 0">Disponível em estoque</span>
              </p>
            </div>
            <p style="min-height: 100px;">{{ pProduct.display_description }}</p>
            <div class="quality-add-to-cart">
              <div class="quality">
                <label>Quantidade:</label>
                <input class="cart-plus-minus-box" type="number" name="quantity" v-model="quantity">
              </div>
              <div class="product-action">
                <a class="action-cart" title="Add To Cart" href="#" @click="addCart">Add to Cart</a>
                <a class="same-action" title="Wishlist" href="#">
                  <i class="fa fa-heart-o"></i>
                </a>
              </div>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Categorias:</li>
                <li v-for="category in categories" :key=category.id>
                  <a href="#">{{ category.name }}</a>
                </li>
              </ul>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Tags:</li>
                <li v-for="tag in tags" :key="tag.id">
                  <a href="#">{{ tag.name }}</a>
                </li>
              </ul>
            </div>
            <div class="pro-dec-social">
              <ul>
                <li>
                  <a class="tweet" href="#">
                    <i class="ion-social-twitter"></i> Tweet
                  </a>
                </li>
                <li>
                  <a class="share" href="#">
                    <i class="ion-social-facebook"></i> Share
                  </a>
                </li>
                <li>
                  <a class="google" href="#">
                    <i class="ion-social-googleplus-outline"></i> Google+
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

<style scoped>
.zoompro-border {
  border: 1px solid #ebebeb;
}
.product-details-content {
  position: relative;
}
.zoompro {
  width: 100%;
}
.product-dec-slider {
  text-align: center;
}
.product-dec-slider a {
  padding: 0 5px;
  cursor: pointer;
}
.product-dec-slider a img {
  border: 2px solid transparent;
  cursor: pointer;
}
.product-dec-slider a.active img {
  border: 2px solid #ebebeb;
}
.product-dec-slider a.slick-active {
  position: relative;
}
.product-dec-slider a.slick-active:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 99;
  opacity: 0.3;
}
.product-dec-slider a.active.slick-active:before   {
  opacity: 0;
}
.product-details-img {
  position: relative;
}
.zoompro-span {
  position: relative;
}
.zoompro-span > span {
  background-color: #7aed0a;
  border-radius: 3px;
  color: #fff;
  left: 30px;
  line-height: 1;
  padding: 6px 14px 5px;
  position: absolute;
  top: 20px;
  z-index: 99;
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
  color: #7aed0a;
}
.pro-dec-review ul li {
  display: inline-block;
  list-style: outside none none;
  margin-right: 38px;
  position: relative;
}
.pro-dec-review ul li:last-child {
  margin-right: 0px;
}
.pro-dec-review ul li::before {
  background-color: #e1e1e1;
  content: "";
  height: 20px;
  position: absolute;
  right: -21px;
  top: 2px;
  transition: all 0.4s ease 0s;
  width: 1px;
}
.pro-dec-review ul li:last-child::before {
  display: none;
}
.pro-dec-review {
  margin: 0 0 0 35px;
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
.in-stock > p span {
  color: #e54d4d;
  font-weight: bold;
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
.quality-add-to-cart .product-action > a.action-cart {
  padding: 11px 40px 10px;
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
  color: #7aed0a;
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
.pro-dec-social li a.tweet {
  background-color: #00aaf0;
  border: 1px solid transparent;
}
.pro-dec-social li a.tweet:hover {
  background-color: transparent;
  border: 1px solid #7aed0a;
  color: #7aed0a;
}
.pro-dec-social li a.share {
  background-color: #435f9f;
  border: 1px solid transparent;
}
.pro-dec-social li a.share:hover {
  background-color: transparent;
  border: 1px solid #7aed0a;
  color: #7aed0a;
}
.pro-dec-social li a.google {
  background-color: #e04b34;
  border: 1px solid transparent;
}
.pro-dec-social li a.google:hover {
  background-color: transparent;
  border: 1px solid #7aed0a;
  color: #7aed0a;
}
.pro-dec-social {
  margin: 27px 0 0;
}
.product-content {
  padding: 3px 18px 0;
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
  color: #0363cd;
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
.product-action > a.action-cart {
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 9px 20px 8px;
  text-transform: uppercase;
}

.product-action > a.action-cart:hover,
.product-action > a.same-action:hover {
  background-color: #7aed0a;
  color: #fff;
}

</style>

<script>
export default {
  props: ['pProduct', 'tags', 'categories'],
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/3.0.8/jquery.elevatezoom.min.js' }
      ],
    }
  },
  data() {
    return {
      quantity: "1"
    }
  },
  mounted() {
    $(".zoompro").elevateZoom({
      gallery: "gallery",
      responsive: true,
      galleryActiveClass: "active",
      zoomWindowWidth: 300,
      zoomWindowHeight: 100,
      scrollZoom: false,
      zoomType: "inner",
      cursor: "crosshair"
    });
  },
  methods: {
    addCart(){
        var obj = {
          id: pProduct.id,
          quantity: this.quantity,
          display_name: pProduct.display_name,
          value: pProduct.price
        }
        this.$notify({
            group: 'general',
            type: 'success',
            title: 'Item adicionado',
            text: 'O Item foi adicionado com sucesso do seu carrinho de compras!'
        });
        this.$store.commit('cart/add', obj)
    }
  }
};
</script>

