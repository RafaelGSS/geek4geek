<template>
  <div class="header-contact">
    <div class="header-contact-icon">
      <whatsapp-icon/>
    </div>
    <div class="header-contact-content" :style="[sizeStyle]">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import WhatsappIcon from "@/components/widgets/social/WhatsappIcon";

export default {
  props: {
    size: {
      type: Number,
      default: 200
    }
  },
  components: {
    WhatsappIcon
  },
  computed: {
    sizeStyle: function() {
      return {
        "max-width": `${this.size}px;`
      };
    }
  }
};
</script>

<style scoped>
p {
  color: #ddd;
}
.header-contact {
  margin-top: 8px;
}

.header-contact-icon {
  display: inline-block;
  color: #ddd;
  float: left;
  margin-right: 14px;
}
.header-contact-icon i {
  font-size: 35px;
}

.header-contact-content {
  display: inline-block;
  float: left;
  overflow: hidden;
}
.header-contact-content > p {
  line-height: 18px;
  margin: 0;
}
</style>


