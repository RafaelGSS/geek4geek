<template>
  <div>
    <list-reviews :reviews="reviews"/>
    <form-review />
  </div>
</template>

<script>
import ListReviews from "@/components/pages/product-details/ListReviews";
import FormReview from "@/components/widgets/FormReview";

export default {
  components: {
    ListReviews,
    FormReview
  },
  props: {
    reviews: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
