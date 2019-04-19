<template>
  <nav>
    <div class="refinar">
      <a href="javascript:void(0);" class="filter-b" @click="showUnSidebar">
        <i class="fa fa-bars"></i>
        <slot name="title"></slot>
      </a>
    </div>
    <div class="items-sidebar" id="items-sidebar">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    showUnSidebar() {
      if ($("#items-sidebar").css("display") == "none") {
        $("#items-sidebar").show(500);
      } else {
        $("#items-sidebar").hide(500);
      }
    }
  }
};
</script>

<style scoped>
.filter-b {
  font-size: 1.2em;
}

@media (max-width: 1024px) {
  .items-sidebar {
    display: none;
  }
}
</style>
