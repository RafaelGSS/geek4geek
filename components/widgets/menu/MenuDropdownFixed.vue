<template>
  <nav>
    <div class="refinar">
      <a href="javascript:void(0);" class="filter-b" @click="onClickSidebar">
        <i class="fa fa-bars"></i>
        <slot name="title"></slot>
      </a>
    </div>
    <div class="visible" id="items-sidebar">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    onClickSidebar() {
      document
      .querySelector("#items-sidebar")
      .classList.toggle("visible")
    }
  }
};
</script>

<style scoped>
.refinar {
  margin-bottom: 10px;
}
#items-sidebar {
  display: none;
}
#items-sidebar.visible {
  display: block;
}
.filter-b {
  font-size: 1.2em;
}
</style>
