<template>
  <div class="rattings-wrapper">
    <div class="sin-rattings" v-for="review in reviews" :key="review.id">
      <div class="star-author-all">
        <div class="ratting-star f-left">
          <star :hasButton="false" v-for="i in review.review_star" :key="i"/>
          <span>({{ review.review_star }})</span>
        </div>
        <div class="ratting-author f-right">
          <h3>{{ review.author }}</h3>
          <span>{{ review.created_at }}</span>
        </div>
      </div>
      <p>{{ review.review }}</p>
    </div>
  </div>
</template>

<script>
import Star from "@/components/widgets/Star";

export default {
  components: {
    Star
  },
  props: {
    reviews: {
      type: Array, // [{ id: 1, review_star: 5, author: "", created_at: "2018-09-20", review: "Message" }]
      default: () => [],
      validator: val => {
      let val = [0]
        if (val.lenght > 0) {
          return ["id", "review_star", "author", "review", "created_at"].every(
            k => k in val
          );
        }
        return true;
      }
    }
  }
};
</script>

<style scoped>
.sin-rattings {
  margin-bottom: 30px;
}

.sin-rattings > p {
  color: #242424;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 0;
}

.star-author-all {
  margin-bottom: 10px;
  overflow: hidden;
}

.ratting-star > span {
  margin-left: 5px;
}

.ratting-author h3 {
  color: #242424;
  float: left;
  font-size: 15px;
  font-weight: 400;
  line-height: 13px;
  margin: 0;
  text-transform: capitalize;
}
.ratting-author span {
  color: #242424;
  display: block;
  float: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 13px;
  margin-left: 15px;
}
</style>
