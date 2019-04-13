<template>
  <div class="description-review-area pt-25 pb-70">
    <div class="container">
      <div class="description-review-wrapper">
        <div class="description-review-topbar nav text-center">
          <a class="active" data-toggle="tab" href="#des-details1">Descrição</a>
          <a data-toggle="tab" href="#des-details3">Reviews</a>
        </div>
        <div class="tab-content description-review-bottom">
          <div id="des-details1" class="tab-pane active">
            <product-description :text="full_description" />
          </div>
          <div id="des-details3" class="tab-pane">
            <product-review :reviews="reviews" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductReview from "@/components/product-details/ProductReview";
import ProductDescription from "@/components/product-details/ProductDescription";

export default {
  components: {
    ProductReview,
    ProductDescription
  },
  props: {
    full_description:{
      type: String
    },
    reviews: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    unsetStar(){
      let els = document.getElementsByClassName('button-ion-star')
      Array.from(els).forEach((el) => {
        el.classList.remove('theme-color');
      }); 
    },
    setStar(value){
      this.unsetStar()
      Array.from({length: value}, (x,i) => {
        document.getElementById("star-review-" + i).classList.add('theme-color')
      });
    }
  }
};
</script>

<style scoped>

.description-review-topbar {
  justify-content: center;
  display: flex;
}
.description-review-topbar a {
  border-bottom: 2px solid transparent;
  color: #666;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  margin: 0 35px;
  padding-bottom: 10px;
}
.description-review-topbar a.active {
  border-bottom: 2px solid #3cb371;
  color: #242424;
}
.tab-content.description-review-bottom {
  background-color: #fff;
  border-radius: 5px;
  border-top: 1px solid #ebebeb;
  padding: 50px 0 20px;
}

</style>
