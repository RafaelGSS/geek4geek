<template>
  <div class="product-sorting-wrapper">
    <div class="product-show shorting-style">
      <label>Ordenar:</label>
      <select id="sort-by" v-model="sortBy" @change="sort()">
        <option value="DEFAULT" disabled>Escolha uma opção</option>
        <option value="PRICE_DESC">Preço decrescente</option>
        <option value="PRICE_ASC">Preço crescente</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.shorting-style {
    display: inline-block;
    margin-left: 20px;
}
.product-shorting.shorting-style {
    margin-left: 0;
}
.shorting-style > label {
    color: #242424;
    cursor: pointer;
    margin: 0 11px 0 0;
}
.product-shorting.shorting-style select {
    width: 110px;
}
.shorting-style select {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: #fff url("/img/icon-img/shop.png") no-repeat scroll right 10px center;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-shadow: none;
    color: #898888;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    padding-left: 10px;
    width: 210px;
}
</style>

<script>
import busFilter from "@/assets/js/eventBus_filter.js";

export default {
    data: () => ({
        sortBy: "DEFAULT"
    }),
    methods: {
        sort(){
            busFilter.$emit('SORT_BY', this.sortBy);
        }
    }
}
</script>
