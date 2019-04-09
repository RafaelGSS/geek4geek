<template>
  <nav class="social-icon mr-40">
    <ul>
      <li v-if="social.indexOf('facebook') !== -1">
        <facebook-icon/>
      </li>
      <li v-if="social.indexOf('instagram') !== -1">
        <instagram-icon/>
      </li>
    </ul>
  </nav>
</template>

<script>
import FacebookIcon from "@/components/widgets/social/FacebookIcon";
import InstagramIcon from "@/components/widgets/social/InstagramIcon";

export default {
  components: {
    FacebookIcon,
    InstagramIcon
  },
  props: {
    social: {
      type: Array,
      default: () => ["instagram", "facebook"]
    }
  }
};
</script>

<style scoped>
li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.social-icon {
  margin-top: 22px;
}
.social-icon ul li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 8px 10px 0;
}
</style>

