<template>
  <div class="star-box">
    <h2>Nota: ({{ this.starsChecked }})</h2>
    <div class="ratting-star">
      <star
        v-for="star in this.stars"
        :id="star.id"
        :selected="star.selected"
        :hasButton=false
        :btnClass=true
        @click="onChecked"
        :key="`str-${star.id}`"
      />
    </div>
  </div>
</template>

<script>
import Star from "@/components/ui/Star";

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
    stars: [],
    starsChecked: 0
  }),
  mounted() {
    // Initialize array of stars data
    for (let star of Array(this.maxStar).keys()) {
      this.stars.push({ id: star, selected: false });
    }
    // Initialize with defaults
    this.onChecked([null, this.init]) 
  },
  methods: {
    onChecked([value, id]) {
      this.cleanup();
      this.starsChecked = id + 1 // To show without 0 index.

      for (let star of Array(Number(id + 1)).keys()) {
        this.stars[star].selected = true;
      }
    },
    cleanup() {
      for (let star of Array(this.maxStar).keys()) {
        this.stars[star].selected = false;
      }
    }
  }
};
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
