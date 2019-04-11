<template>
  <div>
    <header>
      <HeaderTop/>
      <HeaderMiddle/>
      <HeaderBottom :categories="categories"/>
    </header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <FooterTop/>
      <FooterBottom/>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background: #282829;
}
</style>


<script>
import HeaderTop from "~/components/base/HeaderTop";
import HeaderMiddle from "~/components/base/HeaderMiddle";
import HeaderBottom from "~/components/base/HeaderBottom";
import FooterTop from "~/components/base/FooterTop";
import FooterBottom from "~/components/base/FooterBottom";

export default {
  components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom,
    FooterTop,
    FooterBottom
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
};
</script>
