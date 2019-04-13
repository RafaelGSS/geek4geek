<template>
  <div class="star-box">
    <h2>Nota:</h2>
    <div class="ratting-star">
      <star v-for="star in maxStar" @click="onChecked" :key="`str-${star}`"/>
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
        maxStar: {
            type: Number,
            default: 5
        },
        init: {
            type: Number,
            default: 0
        }
    },
    data: () => ({
        countStarSelected: 0
    }),
    mounted() {
        this.countStarSelected = this.init
    },
    methods: {
      onChecked(actual) {
        console.log('actual val', actual)
      }
    }
}
</script>

<style scoped>
.star-box h2 {
  color: #242424;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin: 0 0 10px;
}
.star-box {
  margin-bottom: 40px;
}

</style>
