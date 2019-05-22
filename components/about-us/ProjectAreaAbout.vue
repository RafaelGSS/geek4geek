<template>
  <div class="row">
    <div class="col-lg-3 col-md-6 col-sm-6" v-for="project in projects" :key="project.id">
      <project-about :count="project.count" :name="project.name" :icon="project.icon"/>
    </div>
  </div>
</template>

<script>
import ProjectAbout from "@/components/about-us/ProjectAbout";

export default {
  components: {
    ProjectAbout
  },
  data: () => ({
    projects: [
      {
        id: 1,
        name: "Vendas realizadas",
        count: 690,
        icon: "ion-cash"
      },
      {
        id: 2,
        name: "Suporte realizados",
        count: 15,
        icon: "ion-happy-outline"
      },
      {
        id: 3,
        name: "Itens aguardando você",
        count: 35,
        icon: "ion-pricetags"
      },
      {
        id: 4,
        name: "Geeks alcançados",
        count: 1042,
        icon: "ion-android-contacts"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
