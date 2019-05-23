<template>
  <nav class="social-icon mr-40">
    <ul>
      <li v-if="social.indexOf('facebook') !== -1">
        <facebook-icon/>
      </li>
      <li v-if="social.indexOf('instagram') !== -1">
        <instagram-icon/>
      </li>
      <li v-if="social.indexOf('whatsapp') !== -1">
        <whatsapp-icon/>
      </li>
    </ul>
  </nav>
</template>

<script>
import FacebookIcon from "@/components/ui/social/FacebookIcon";
import InstagramIcon from "@/components/ui/social/InstagramIcon";
import WhatsappIcon from "@/components/ui/social/WhatsappIcon";

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    WhatsappIcon
  },
  props: {
    social: {
      type: Array,
      default: () => ["instagram", "facebook", "whatsapp"]
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

