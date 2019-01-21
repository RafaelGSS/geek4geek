<template>
  <div class="product-area pt-35 pb-30">
    <div class="container">
      <div class="product-tab-list product-tab-list-red mb-30 nav" role="tablist">
        <a class="active" href="#home1" data-toggle="tab">
          <h4>Novas Chegadas</h4>
        </a>
        <a href="#home2" data-toggle="tab">
          <h4>Destaques</h4>
        </a>
      </div>
      <div class="tab-content jump">
        <div class="tab-pane active" id="home1">
          <div class="custom-row">
            <div class="custom-col-5 mb-30" v-for="product_new in products_new" :key="product_new.id">
              <div class="geek4-product-2 mrg-inherit geek4-product-red">
                <div class="product-img">
                  <div class="product-img-slider">
                    <a href="product-details.html">
                      <img src="/img/product/pro-toy-1.jpg" alt>
                    </a>
                  </div>
                  <span v-if="product_new.promo">-{{ product_new.promotion.percentage }}%</span>
                </div>
                <div class="list-col">
                  <div class="gridview">
                    <div class="product-content text-center">
                      <span>{{ product_new.category_name }}</span>
                      <h4>
                        <a href="product-details.html">{{ product_new.name }}</a>
                      </h4>
                      <div class="product-price-wrapper">
                        <span>R$ {{ product_new.price }}</span>
                        <span class="product-price-old" v-if="product_new.promo">R$ {{ product_new.promotion.old_price }}</span>
                      </div>
                    </div>
                    <div class="product-action-wrapper-2 text-center">
                      <div class="product-rating">
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline"></i>
                      </div>
                      <p> {{ product_new.display_description }}</p>
                      <div class="product-action">
                        <a class="same-action" title="Wishlist" href="#">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a
                          class="action-cart"
                          href="#"
                          title="ADICIONAR AO CARRINHO"
                         @click="addCart({
                              id: product_new.id,
                              display_name: product_new.name,
                              quantity: 1,
                              value: product_new.price})"
                        >+ CARRINHO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="home2">
          <div class="custom-row">
            <div class="custom-col-5 mb-30" v-for="product_hot in products_hot" :key="product_hot.id">
              <div class="geek4-product-2 mrg-inherit geek4-product-red">
                <div class="product-img">
                  <div class="product-img-slider">
                    <a href="product-details.html">
                      <img src="/img/product/pro-toy-1.jpg" alt>
                    </a>
                  </div>
                  <span v-if="product_hot.promo">{{ product_hot.promotion.percentage }}</span>
                </div>
                <div class="list-col">
                  <div class="gridview">
                    <div class="product-content text-center">
                      <span>{{ product_hot.category_name }}</span>
                      <h4>
                        <a href="product-details.html">{{ product_hot.name }}</a>
                      </h4>
                      <div class="product-price-wrapper">
                        <span>R$ {{ product_hot.price }}</span>
                        <span class="product-price-old" v-if="product_hot.promo">R$ {{ product_hot.promotion.old_price }}</span>
                      </div>
                    </div>
                    <div class="product-action-wrapper-2 text-center">
                      <div class="product-rating">
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline theme-star"></i>
                        <i class="ion-android-star-outline"></i>
                      </div>
                      <p> {{ product_hot.display_description }}</p>
                      <div class="product-action">
                        <a class="same-action" title="Wishlist" href="#">
                          <i class="fa fa-heart-o"></i>
                        </a>
                        <a
                          class="action-cart"
                          title="ADICIONAR AO CARRINHO"
                          href="#"
                          @click="addCart({
                              id: product_hot.id,
                              display_name: product_hot.name,
                              quantity: 1,
                              value: product_hot.price})"
                        >+ CARRINHO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-row {
    display: flex;
    flex-wrap: wrap;
}
.custom-col-5 {
    flex: 0 0 20%;
    max-width: 20%;
}
.custom-col-4 {
    flex: 0 0 25%;
    max-width: 25%;
}
.custom-col-3 {
    flex: 0 0 33.333%;
    max-width: 33.333%;
}
.custom-col-2 {
    flex: 0 0 50%;
    max-width: 50%;
}
.tab-content.jump > .tab-pane {
    display: block;
    height: 0;
    opacity: 0;
    overflow: hidden;
}
.tab-content.jump > .tab-pane.active {
    display: block;
    height: auto;
    opacity: 1;
    overflow: visible;
}
.product-tab-list,
.product-tab-list-3 {
    display: flex;
    justify-content: center;
    position: relative;
}
.product-tab-list-3 {
    z-index: 99;
}
.product-tab-list::before,
.product-tab-list::after {
    background-color: #eee;
    content: "";
    height: 1px;
    position: absolute;
    top: 25px;
    transition: all 0.4s ease 0s;
    width: 300px;
}
.product-tab-list::before {
    left: 0px;
}
.product-tab-list::after {
    right: 0px;
}
.product-tab-list > a {
    margin: 0 5px;
}
.product-tab-list > a h4 {
    border: 2px solid #eee;
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    padding: 13px 32px 12px;
    transition: all .3s ease 0s;
}
.product-tab-list > a.active h4 {
    border: 2px solid #7aed0a;
    color: #3cb371;
}
.product-action-wrapper-2 > p {
    color: #242424;
    font-size: 12px;
    line-height: 18px;
    margin: 9px 0 17px;
}
.geek4-product-2 {
    background: #fff none repeat scroll 0 0;
    border-radius: 4px;
    position: relative;
    text-align: left;
    transition: all 0.4s ease-out 0s;
    word-wrap: break-word;
    z-index: 1;
    margin: 15px 4px;
}
.geek4-product-2.mrg-inherit {
    margin: 0;
}
.geek4-product-2:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    z-index: 3;

}
.geek4-product-2 .list-col .gridview {
    display: block;
    margin: 0;
    padding: 0px 5px 30px;
    position: relative;
    text-align: center;
    transition: all 0.3s ease-out 0s;
}
.geek4-product-2:hover .list-col .gridview {
    margin-bottom: -166px;
}
.geek4-product-2 .product-action-wrapper-2 {
    margin: -181px -15px -15px;
    opacity: 0;
    padding: 26px 23px 0;
    transition: all 0.3s ease-out 0s;
}
.geek4-product-2:hover .product-action-wrapper-2 {
    margin: -15px;
    opacity: 1;
}
.geek4-product-2.mb-30 {
    margin-bottom: 28px;
}
.product-slider-nav.nav-style , 
.product-slider-nav-2.nav-style {
    float: right;
    margin-top: -42px;
    position: relative;
    z-index: 99;
    margin-bottom: 0;
}
.product-slider-nav.nav-style div , 
.product-slider-nav-2.nav-style div {
    background-color: #efefef;
    border-radius: 3px;
    color: #242424;
    display: inline-block;
    font-size: 16px;
    height: 35px;
    line-height: 35px;
    opacity: 1;
    text-align: center;
    transition: all 0.3s ease 0s;
    width: 35px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
}
.nav-style.nav-center.nav-style-sunglass.owl-carousel .owl-nav div , 
.nav-style.nav-center.nav-style-watch.owl-carousel .owl-nav div {
    right: 0;
    bottom: 150px;
    transform: translateY(0);
    top: auto;
}
.nav-style.nav-center.nav-style-sunglass-2.owl-carousel .owl-nav div {
    right: 0;
    bottom: 338px;
    transform: translateY(0);
    top: auto;
}
.product-slider-nav.nav-style div:hover , 
.product-slider-nav-2.nav-style div:hover {
    background-color: #3cb371;
    color: #fff;
}
.product-slider-nav-2.nav-style.nav-style-game div {
    background-color: #1c1c1c;
    color: #ccc;
}
.product-slider-nav-2.nav-style.nav-style-game div:hover {
    background-color: #df2121;
    color: #fff;
}
.product-slider-nav.nav-style div.owl-prev , 
.product-slider-nav-2.nav-style div.owl-prev {
    margin-right: 40px;
}
.height-empty{
    height: 1px;
}
.product-slider {
    width: auto;
    z-index: 0;
    overflow: hidden;
}
.product-slider:hover {
    z-index: 2;
    overflow: visible;
}
.product-slider .owl-stage-outer {
    margin-top: -160px;
    padding: 0px 0 160px;
    transform: translateY(160px);
}
.geek4-product-2.mb-45 {
    margin-bottom: 45px;
}
.geek4-product-2 .product-img {
    padding: 10px 10px 0;
    position: relative;
}
.product-img img {
    width: 100%;
}
.product-content {
    padding: 3px 18px 0;
}
.mrg-inherit .product-content {
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
.product-rating i {
    color: #b2b2b2;
    font-size: 17px;
}
.product-rating i.theme-star {
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
.product-action > a.same-action:hover,
.product-action > a.action-cart:hover {
    background-color: #3cb371;
    color: #fff;
    cursor: pointer; 
}
.product-rating {
    position: relative;
}
.product-rating::before, .product-rating::after {
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

<script>
export default {
  props: ['products_new', 'products_hot'],
  mounted() {

  },
  methods: {
    addCart(obj){
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


