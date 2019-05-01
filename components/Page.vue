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

<script>
import HeaderTop from "@/components/base/HeaderTop";
import HeaderMiddle from "@/components/base/HeaderMiddle";
import HeaderBottom from "@/components/base/HeaderBottom";
import FooterTop from "@/components/base/FooterTop";
import FooterBottom from "@/components/base/FooterBottom";

/**
 * GraphQL Queries
 */
import Categories from "@/apollo/queries/categories/Category";

export default {
  components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom,
    FooterTop,
    FooterBottom
  },
  apollo: {
    categories: {
      prefetch: true,
      query: Categories,
      update: data => data.categories.records
    }
  }
};
</script>

<style scoped>
footer {
  background: #282829;
}
</style>
