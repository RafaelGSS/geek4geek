<template>
  <div class="product-sorting-wrapper">
    <div class="product-show shorting-style">
      <label>Ordenar:</label>
      <select id="sort-by" v-model="sortBy" @change="sort">
        <option value="DEFAULT" disabled>Escolha uma opção</option>
        <option value="PRICE_DESC">Preço decrescente</option>
        <option value="PRICE_ASC">Preço crescente</option>
      </select>
    </div>
  </div>
</template>

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
.shorting-style select {
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

@media (min-width: 992px) and (max-width: 1199px) {
    .shorting-style select {
        width: 160px !important;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .shorting-style select {
        width: 160px !important;
    }
}

@media (max-width: 767px) {
     .shorting-style select {
        width: 160px !important;
    }
    .shorting-style {
        margin-left: 0 !important;
        margin-top: 10px !important;
        margin-right: 15px !important;
    }
    .shorting-style:last-child {
        margin-right: 0px !important;
    }
}
</style>
