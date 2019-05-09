<template>
  <a class="same-action" title="Wishlist" href="#" @click="addWishlist">
    <i class="fa fa-heart-o"></i>
  </a>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    addWishlist() {
      // Todo
    }
  }
};
</script>

<style scoped>
a.same-action {
  width: 40px;
  height: 40px;
  /* padding: 8px 8px 8px; */
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
}

a.same-action:hover {
  background-color: #3cb371;
  color: #fff;
}

a i {
  line-height: 41px;
  text-align: center;
}
</style>


