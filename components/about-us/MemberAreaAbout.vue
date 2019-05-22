<template>
  <div>
    <div class="text-center mb-40">
      <section-title>Nossa Equipe</section-title>
    </div>
    <div class="team-members">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6" v-for="member in members" :key="member.id">
          <member-about :name="member.name" :image="member.image" :position="member.position"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemberAbout from "@/components/about-us/MemberAbout";
import SectionTitle from "@/components/ui/SectionTitle";

export default {
  components: {
    MemberAbout,
    SectionTitle
  },
  data: () => ({
    members: [
      {
        id: 1,
        name: "Rafael Gonzaga",
        position: "Desenvolvedor",
        image: "/img/team/team-1.jpg"
      },
      {
        id: 2,
        name: "Guilherme Dourado",
        position: "Marketing",
        image: "/img/team/team-1.jpg"
      },
      {
        id: 3,
        name: "Yure Nogueira",
        position: "Desenvolvedor",
        image: "/img/team/team-1.jpg"
      },
      {
        id: 4,
        name: "Irineu",
        position: "CEO",
        image: "/img/team/team-1.jpg"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
