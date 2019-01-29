<template>
  <div class="product-area pt-35 pb-30">
    <div class="container">
      <div class="product-tab-list mb-30 nav" role="tablist">
        <a href="#novas-chegadas" data-toggle="tab" class="btn-tab active" @click="showNews">
          <h4>Novas Chegadas</h4>
        </a>
        <a href="#destaques" data-toggle="tab" class="btn-tab" @click="showHots">
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
import ProductList from "~/components/ShopArea/ProductList.vue";

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
      document.getElementById(this.idNews).classList.add("active");
      document.getElementById(this.idHots).classList.remove("active");
    },
    showHots() {
      document.getElementById(this.idHots).classList.add("active");
      document.getElementById(this.idNews).classList.remove("active");
    }
  }
};
</script>


