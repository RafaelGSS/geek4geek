<template>
  <div class="product-area pt-35 pb-30">
    <div class="container">
      <div class="product-tab-list product-tab-list-red mb-30 nav" role="tablist">
        <a href="#novas-chegadas" data-toggle="tab" class="btn-tab active" @click="showNews">
          <!-- <a class="active" href="#home1" data-toggle="tab"> -->
          <h4>Novas Chegadas</h4>
        </a>
        <a href="#destaques" data-toggle="tab" class="btn-tab" @click="showHots">
          <!-- <a href="#home2" data-toggle="tab"> -->
          <h4>Destaques</h4>
        </a>
      </div>
      <div class="tab-content jump">
        <ProductList
          :products="products_new"
          :idContainer="idNews"
          :isActive="true"
          :itemsPerRow="5"
        />
        <ProductList
          :products="products_hot"
          :idContainer="idHots"
          :isActive="false"
          :itemsPerRow="5"
        />
        <!-- <div class="tab-pane active" id="home1">
          <div class="custom-row">
            <div class="custom-col-5 mb-30" v-for="product_new in products_new" :key="product_new.id">
              <div class="geek4-product-2 mrg-inherit geek4-product-red">
                <div class="product-img">
                  <div class="product-img-slider">
                    <a href="#">
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
                        <a href="#">{{ product_new.name }}</a>
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
                    <a href="#">
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
                        <a href="#">{{ product_hot.name }}</a>
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
        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-tab-list,
.product-tab-list-3 {
  display: flex;
  justify-content: center;
  position: relative;
}

.tab-pane {
  display: block;
  height: 0;
  opacity: 0;
  overflow: hidden;
}
/* .tab-content.jump >  */
.tab-pane.active {
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
  transition: all 0.3s ease 0s;
}
.product-tab-list > a.active h4 {
  border: 2px solid #7aed0a;
  color: #3cb371;
}
</style>

<script>
import ProductList from "~/components/ProductList.vue";

export default {
  components: {
    ProductList
  },
  props: ["products_new", "products_hot"],
  mounted() {
      $(function() {
        var $h3s = $(".btn-tab").click(function() {
          $h3s.removeClass("active");
          $(this).addClass("active");
        });
      });
  },
  data: () => ({
    idNews: "home1",
    idHots: "home2"
  }),
  methods: {
    addCart(obj) {
      this.$notify({
        group: "general",
        type: "success",
        title: "Item adicionado",
        text: "O Item foi adicionado com sucesso do seu carrinho de compras!"
      });
      this.$store.commit("cart/add", obj);
    },
    showNews() {
      this.$nuxt.$emit("SET_ACTIVE", this.idNews);
      this.$nuxt.$emit("UNSET_ACTIVE", this.idHots);

    },
    showHots() {
      this.$nuxt.$emit("SET_ACTIVE", this.idHots);
      this.$nuxt.$emit("UNSET_ACTIVE", this.idNews);

    }
  }
};
</script>


