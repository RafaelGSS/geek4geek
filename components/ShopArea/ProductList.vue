<template>
  <div class="tab-pane active">
    <div class="custom-row">
      <div
        :class="['custom-col-' + itemsPerRow, 'mb-30']"
        v-for="prod in filteredProducts"
        :key="`prod-${prod.id}`"
      >
        <product class="geek4-product-2 mrg-inherit" :product="prod"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/ShopArea/Product"

export default {
  components: {
    Product
  },
  props: {
    products: Array,
    itemsPerRow: {
      type: Number,
      default: 4
    }
  },
  data: () => ({
    filtersAppied: [],
    sortName: "default"
  }),
  methods: {
    addFilter(filter) {
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
        if (this.filtersAppied[exist].data.length == 0) {
          this.filtersAppied.splice(exist, 1);
        }
      }
    },
    sortBy(by) {
      this.sortName = by;
    },
    setLoading() {
      this.isLoading = !this.isLoading;
    }
  },
  computed: {
    filteredProducts: function() {
      return this.products
        .filter(product => {
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
        })
        .sort((a, b) => {
          switch (this.sortName) {
            case "PRICE_DESC":
              return b.price - a.price;
            case "PRICE_ASC":
              return a.price - b.price;
            default:
              return 0;
          }
        });
    }
  }
};
</script>

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
.geek4-product-2.mb-30 {
  margin-bottom: 28px;
}
.geek4-product-2.mb-45 {
  margin-bottom: 45px;
}
</style>
