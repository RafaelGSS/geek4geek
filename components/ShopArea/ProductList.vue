<template>
  <div class="tab-content jump">
    <div :class="{'tab-pane': true, active: isAct}" :id="idContainer">
      <div class="custom-row">
        <div
          :class="['custom-col-' + itemsPerRow, 'mb-30']"
          v-for="prod in filteredProducts"
          :key="prod.id"
        >
          <div class="geek4-product-2 mrg-inherit geek4-product-red">
            <div class="product-img">
              <div class="product-img-slider">
                <a href="#">
                  <img src="/img/product/pro-toy-1.jpg" alt>
                </a>
              </div>
              <span v-if="prod.promo">-{{ prod.promotion.percentage }}%</span>
            </div>
            <div class="list-col">
              <div class="gridview">
                <div class="product-content text-center">
                  <span>{{ prod.category_name }}</span>
                  <h4>
                    <a href="#">{{ prod.name }}</a>
                  </h4>
                  <div class="product-price-wrapper">
                    <span>R$ {{ prod.price }}</span>
                    <span
                      class="product-price-old"
                      v-if="prod.promo"
                    >R$ {{ prod.promotion.old_price }}</span>
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
                  <p>{{ prod.display_description }}</p>
                  <div class="product-action">
                    <a class="same-action" title="Wishlist" href="#">
                      <i class="fa fa-heart-o"></i>
                    </a>
                    <a
                      class="action-cart"
                      href="#"
                      title="ADICIONAR AO CARRINHO"
                      @click="addCart({
                              id: prod.id,
                              display_name: prod.name,
                              quantity: 1,
                              value: prod.price})"
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
</template>

<style scoped>
/* Items per row */
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
.custom-row {
  display: flex;
  flex-wrap: wrap;
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

<script>
import busFilter from "@/assets/js/eventBus_filter.js";

export default {
  props: {
    products: Array /* Type: interfaces/product.ts */,
    itemsPerRow: {
      type: Number,
      default: 4
    },
    idContainer: {
      type: String,
      default: "home1"
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    isAct: true,
    filtersAppied: [], /* Type: interfaces/filterProducts.ts */
    sortName: 'default',
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
    addFilter(filter){
       var exist = this.filtersAppied.findIndex(
        item => JSON.stringify(item.type) == JSON.stringify(filter.type)
      );

      if (exist == -1) {
        this.filtersAppied.push({ type: filter.type, data: [filter.value] });
        return;
      }

      var existData = this.filtersAppied[exist].data.findIndex(
        item => item == filter.value
      );

      if (existData == -1) {
        this.filtersAppied[exist].data.push(filter.value);
      } else {
        this.filtersAppied[exist].data.splice(existData, 1);
        // Remove obj if is empty
        if(this.filtersAppied[exist].data.length == 0){
          this.filtersAppied.splice(exist, 1)
        }
      }
    },
    sortBy(by){
      this.sortName = by
    }
  },
  created() {
    this.isAct = this.isActive;

    busFilter.$on("ADD_TO_FILTER", this.addFilter);
    busFilter.$on("SORT_BY", this.sortBy);
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => {
        return this.filtersAppied.every(filterAppied => {
          switch (filterAppied.type) {
            case "Tag":
              return product.tags.arrayContains(filterAppied.data);
            case "Material":
              return filterAppied.data.includes(product.material);
            default:
              return true;
          }
        });
      }).sort((a, b) => {
        switch(this.sortName)
        {
          case 'PRICE_DESC': return b.price - a.price;
          case 'PRICE_ASC': return a.price - b.price;
          default: return 0;
        }
      });
    },
  }
};
</script>


