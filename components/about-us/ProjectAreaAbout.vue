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
        name: "cups of coffee",
        count: 690,
        icon: "ion-ios-wineglass-outline"
      },
      {
        id: 2,
        name: "cups of coffee",
        count: 690,
        icon: "ion-ios-wineglass-outline"
      },
      {
        id: 3,
        name: "cups of coffee",
        count: 690,
        icon: "ion-ios-wineglass-outline"
      },
      {
        id: 4,
        name: "cups of coffee",
        count: 690,
        icon: "ion-ios-wineglass-outline"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
