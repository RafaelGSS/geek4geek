<template>
  <Page>
    <div style="background-color: #282829">
      <div class="container">
        <div v-if="error.statusCode === 404">
          <E404/>
        </div>
        <div v-if="error.statusCode === 500">
          <E500/>
        </div>
        <div v-if="error.statusCode === 403">
          <E500/>
        </div>
        <div class="go-home">
          <nuxt-link to="/" class="btn btn-success">Quero ir para Homepage</nuxt-link>
        </div>
      </div>
    </div>
    <div style="background-color: #4a4a4a; height: 5px;"></div>
  </Page>
</template>

<script>
import Page from "@/components/Page.vue";
import E404 from "@/components/error/E404";
import E500 from "@/components/error/E500";
import E403 from "@/components/error/E403";

export default {
  props: {
    error: Object
  },
  head: {
    title: "Página não encontrada"
  },
  components: {
    Page,
    E404,
    E500
  },
  mounted() {
    console.log(this.error)
  }
};
</script>

<style scoped>
.go-home {
  text-align: center;
}

.go-home a {
  font-size: 25px;
  padding: 10px;
  width: 500px;
  height: auto;
  color: #fff;
}

.container {
  padding-bottom: 100px;
}
</style>
