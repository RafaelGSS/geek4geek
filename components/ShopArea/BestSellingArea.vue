<template>
  <div class="best-selling-area best-selling-area-toy pt-60 best-selling-small">
    <div class="container">
      <div class="top-bar section-border mb-35">
        <div class="section-title-wrapper section-bg-white">
          <h4 class="section-title">Produtos mais vendidos</h4>
        </div>
        <div class="product-tab-list-2 nav section-bg-white">
          <a class="active" href="#cups" data-toggle="tab">
            <h4>Canecas</h4>
          </a>
          <a href="#tshirts" data-toggle="tab">
            <h4>Camisetas</h4>
          </a>
        </div>
      </div>
      <div class="tab-content jump">
        <div class="tab-pane active" id="cups">
          <div class="best-selling-active-2 nav-style nav-style-red">
            <div class="best-selling-bundle-2">
              <div class="row">
                <div class="col-xl-8 col-lg-12 col-md-12">
                  <div
                    class="best-selling-pro-wrapper mb-20 best-selling-big-img devita-product-red"
                  >
                    <div class="product-img best-selling-img">
                      <a href="#">
                        <img :alt="cups[0].images[0].alt" :src="cups[0].images[0].display_image">
                      </a>
                      <span v-if="cups[0].promo">-{{ cups[0].promotion.percentage }}%</span>
                    </div>
                    <div class="product-content best-pro-content best-selling-style-2">
                      <span
                        v-for="(category, index) in cups[0].categories"
                        :key="`category-cup-${index}`"
                      >{{ category }}</span>
                      <h4>
                        <a href="#">
                          {{ cups[0].name }}
                        </a>
                      </h4>
                      <div class="product-price-wrapper">
                        <span>R$ {{ cups[0].price }}</span>
                        <span class="product-price-old" v-if="cups[0].promo">
                          {{ cups[0].promotion.old_price }}
                        </span>
                      </div>
                      <div class="product-list">
                        {{ cups[0].display_description }}
                      </div>
                      <div class="best-pro-action-2">
                        <a class="action-cart" title="Add cart" href="#" @click="addCart({id: cups[0].id,
                              display_name: cups[0].name,
                              quantity: 1,
                              value: cups[0].price})">Add cart</a>
                        <a class="same-action" title="Wishlist" href="#">
                          <i class="fa fa-heart-o"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-12">
                  <div class="row">
                    <div class="col-xl-12 col-lg-4 col-md-6">
                      <div class="best-selling-pro-wrapper mb-20 devita-product-red">
                        <div class="product-img">
                          <a href="#">
                            <img :alt="cups[1].images[0].alt" :src="cups[1].images[0].low_display_image">
                          </a>
                          <span v-if="cups[1].promo">-{{ cups[1].promotion.percentage }}%</span>
                        </div>
                        <div class="product-content best-pro-content">
                          <span v-for="(category, index) in cups[1].categories" :key="`category-cups1-${index}`">
                            {{ category }}
                          </span>
                          <h4>
                            <a href="#">{{ cups[1].name }}</a>
                          </h4>
                          <div class="product-price-wrapper">
                            <span>R$ {{ cups[1].price }}</span>
                            <span class="product-price-old" v-if="cups[1].promo">
                              R$ {{ cups[1].promotion.old_price }}
                            </span>
                          </div>
                          <div class="product-action best-pro-action">
                            <a class="same-action" title="Wishlist" href="#">
                              <i class="fa fa-heart-o"></i>
                            </a>
                            <a class="action-cart" title="Add cart" href="#" @click="addCart({id: cups[1].id,
                              display_name: cups[1].name,
                              quantity: 1,
                              value: cups[1].price})">Add cart</a>
                          </div>
                        </div>
                      </div>
                      <div class="best-selling-pro-wrapper mb-20 devita-product-red">
                        <div class="product-img">
                          <a href="#">
                            <img :alt="cups[2].images[0].alt" :src="cups[2].images[0].low_display_image">
                          </a>
                          <span v-if="cups[2].promo">-{{ cups[2].promotion.percentage }}%</span>
                        </div>
                        <div class="product-content best-pro-content">
                          <span v-for="(category, index) in cups[2].categories" :key="`category-cup2-${index}`">
                            {{ category }}
                          </span>
                          <h4>
                            <a href="#">{{ cups[2].name }}</a>
                          </h4>
                          <div class="product-price-wrapper">
                            <span>R$ {{ cups[2].price }}</span>
                            <span class="product-price-old" v-if="cups[2].promo">
                              R$ {{ cups[2].promotion.old_price }}
                            </span>
                          </div>
                          <div class="product-action best-pro-action">
                            <a class="same-action" title="Wishlist" href="#">
                              <i class="fa fa-heart-o"></i>
                            </a>
                            <a class="action-cart" title="Add cart" href="#" @click="addCart({id: cups[2].id,
                              display_name: cups[2].name,
                              quantity: 1,
                              value: cups[2].price})">Add cart</a>
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
        <div class="tab-pane" id="tshirts">
          <div class="best-selling-active-2 nav-style nav-style-red">
            <div class="best-selling-bundle-2">
              <div class="row">
                <div class="col-xl-8 col-lg-12 col-md-12">
                  <div
                    class="best-selling-pro-wrapper mb-20 best-selling-big-img devita-product-red"
                  >
                    <div class="product-img best-selling-img">
                      <a href="#">
                        <img :alt="tshirts[0].images[0].alt" :src="tshirts[0].images[0].display_image">
                      </a>
                      <span v-if="tshirts[0].promo">-{{ tshirts[0].promotion.percentage }}%</span>
                    </div>
                    <div class="product-content best-pro-content best-selling-style-2">
                      <span
                        v-for="(category, index) in tshirts[0].categories"
                        :key="`category-cup-${index}`"
                      >{{ category }}</span>
                      <h4>
                        <a href="#">
                          {{ tshirts[0].name }}
                        </a>
                      </h4>
                      <div class="product-price-wrapper">
                        <span>R$ {{ tshirts[0].price }}</span>
                        <span class="product-price-old" v-if="tshirts[0].promo">
                          {{ tshirts[0].promotion.old_price }}
                        </span>
                      </div>
                      <div class="product-list">
                        {{ tshirts[0].display_description }}
                      </div>
                      <div class="best-pro-action-2">
                        <a class="action-cart" title="Add cart" href="#" @click="addCart({id: tshirts[0].id,
                              display_name: tshirts[0].name,
                              quantity: 1,
                              value: tshirts[0].price})">Add cart</a>
                        <a class="same-action" title="Wishlist" href="#">
                          <i class="fa fa-heart-o"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-12">
                  <div class="row">
                    <div class="col-xl-12 col-lg-4 col-md-6">
                      <div class="best-selling-pro-wrapper mb-20 devita-product-red">
                        <div class="product-img">
                          <a href="#">
                            <img :alt="tshirts[1].images[0].alt" :src="tshirts[1].images[0].low_display_image">
                          </a>
                          <span v-if="tshirts[1].promo">-{{ tshirts[1].promotion.percentage }}%</span>
                        </div>
                        <div class="product-content best-pro-content">
                          <span v-for="(category, index) in tshirts[1].categories" :key="`category-cup1-${index}`">
                            {{ category }}
                          </span>
                          <h4>
                            <a href="#">{{ tshirts[1].name }}</a>
                          </h4>
                          <div class="product-price-wrapper">
                            <span>R$ {{ tshirts[1].price }}</span>
                            <span class="product-price-old" v-if="tshirts[1].promo">
                              R$ {{ tshirts[1].promotion.old_price }}
                            </span>
                          </div>
                          <div class="product-action best-pro-action">
                            <a class="same-action" title="Wishlist" href="#">
                              <i class="fa fa-heart-o"></i>
                            </a>
                            <a class="action-cart" title="Add cart" href="#" @click="addCart({id: tshirts[1].id,
                              display_name: tshirts[1].name,
                              quantity: 1,
                              value: tshirts[1].price})">Add cart</a>
                          </div>
                        </div>
                      </div>
                      <div class="best-selling-pro-wrapper mb-20 devita-product-red">
                        <div class="product-img">
                          <a href="#">
                            <img :alt="tshirts[2].images[0].alt" :src="tshirts[2].images[0].low_display_image">
                          </a>
                          <span v-if="tshirts[2].promo">-{{ tshirts[2].promotion.percentage }}%</span>
                        </div>
                        <div class="product-content best-pro-content">
                          <span v-for="(category, index) in tshirts[2].categories" :key="`category-cup2-${index}`">
                            {{ category }}
                          </span>
                          <h4>
                            <a href="#">{{ tshirts[2].name }}</a>
                          </h4>
                          <div class="product-price-wrapper">
                            <span>R$ {{ tshirts[2].price }}</span>
                            <span class="product-price-old" v-if="tshirts[2].promo">
                              R$ {{ tshirts[2].promotion.old_price }}
                            </span>
                          </div>
                          <div class="product-action best-pro-action">
                            <a class="same-action" title="Wishlist" href="#">
                              <i class="fa fa-heart-o"></i>
                            </a>
                            <a class="action-cart" title="Add cart" href="#" @click="addCart({id: tshirts[2].id,
                              display_name: tshirts[2].name,
                              quantity: 1,
                              value: tshirts[2].price})">Add cart</a>
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
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tshirts: {
      type: Array
    },
    cups: {
      type: Array
    }
  },
  methods: {
    addCart(obj) {
      this.$notify({
        group: "general",
        type: "success",
        title: "Item adicionado",
        text: "O Item foi adicionado com sucesso do seu carrinho de compras!"
      });
      this.$store.commit("cart/add", obj);
    }
  }
};
</script>


<style scoped>
.product-img img {
  width: 100%;
}
.product-content {
  padding: 3px 18px 0;
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
}

.product-price-wrapper {
  display: block;
  transition: all 0.3s ease 0s;
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
.section-border {
  margin-right: 94px;
  overflow: hidden;
  position: relative;
}
.section-border::before {
  background-color: #eeeeee;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  top: 10px;
  transition: all 0.4s ease 0s;
  width: 100%;
  z-index: 1;
}
.section-title-wrapper {
  display: inline-block;
  float: left;
}
.section-bg-white {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.product-tab-list-2 {
  display: inline-block;
  float: right;
  padding: 0 0px 0 20px;
}
.section-title {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding-right: 30px;
  display: inline-block;
}
.product-tab-list-2 a {
  display: inline-block;
  margin-left: 15px;
}
.product-tab-list-2 a:first-child {
  margin-left: 0px;
}
.product-tab-list-2 a h4 {
  color: #777;
  font-size: 14px;
  transition: all 0.3s ease 0s;
}
.product-tab-list-2 a.active h4 {
  color: #242424;
}
.best-selling-pro-wrapper {
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  transition: all 0.3s ease 0s;
}
.best-selling-pro-wrapper:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.best-selling-bundle {
  margin-top: 15px;
}
.best-selling-pro-wrapper .product-img > span {
  left: 20px;
  top: 20px;
}
.best-selling-pro-wrapper .product-img {
  flex: 0 0 180px;
  position: relative;
}
.product-content.best-pro-content {
  padding: 13px 13px 5px 10px;
}
.product-action.best-pro-action > a.action-cart {
  padding: 8px 20px 9px;
}
.product-action.best-pro-action {
  margin: 16px 0 0;
  opacity: 0;
  transform: translateY(-30%);
  transition: all 0.3s ease 0s;
  justify-content: left;
}
.best-selling-pro-wrapper:hover .product-action.best-pro-action {
  opacity: 1;
  transform: translateY(0%);
}
.best-selling-active div[class^="col-"] {
  flex: 0 0 100%;
  max-width: 100%;
}

.best-selling-pro-wrapper .product-img.best-selling-img {
  flex: 0 0 380px;
}

.product-list {
  margin: 28px 0 31px;
}
.best-pro-action-2 a {
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  margin: 0 7px 0 0;
  text-transform: uppercase;
}
.best-pro-action-2 a:hover {
  background-color: #3cb371;
  color: #fff;
}
.best-pro-action-2 {
  display: flex;
  flex-wrap: wrap;
}
.best-pro-action-2 a.action-cart {
  padding: 8px 43px 9px;
}
.best-pro-action-2 a.same-action {
  border-radius: 3px;
  font-size: 16px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  width: 35px;
}
.product-content.best-pro-content.best-selling-style-2 {
  padding: 40px 13px 5px 10px;
}
.best-selling-bundle-2 .row {
  margin-left: -10px;
  margin-right: -10px;
}
.best-selling-bundle-2 .row div[class^="col-"] {
  padding-left: 10px;
  padding-right: 10px;
}
.best-selling-active-2.nav-style.owl-carousel .owl-nav div {
  top: -67px;
}
</style>
