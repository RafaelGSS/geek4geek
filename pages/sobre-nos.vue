<template>
  <page>
    <div class="about-us-area pt-80 pb-80">
      <div class="container">
        <intro-about/>
      </div>
    </div>
    <div class="project-count-area gray-bg pt-100 pb-70">
      <div class="container">
        <project-area-about/>
      </div>
    </div>
    <div class="team-area pt-75 pb-50">
      <div class="container">
        <member-area-about/>
      </div>
    </div>
    <div class="banner-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8">
            <image-transition href="#" src="/img/banner/banner-10.jpg"/>
          </div>
          <div class="col-lg-4 col-md-4">
            <image-transition href="#" src="/img/banner/banner-11.jpg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonials-area bg-img pt-75 pb-80">
      <div class="container">
        <testimonial-area-about />
      </div>
    </div>
  </page>
</template>

<script>
import Page from "@/components/Page";

import IntroAbout from "@/components/about-us/IntroAbout";

import ProjectAreaAbout from "@/components/about-us/ProjectAreaAbout";
import MemberAreaAbout from "@/components/about-us/MemberAreaAbout";
import TestimonialAreaAbout from "@/components/about-us/TestimonialAreaAbout";

import ImageTransition from "@/components/banner/images/ImageTransition";

export default {
  components: {
    Page,
    IntroAbout,
    ProjectAreaAbout,
    MemberAreaAbout,
    TestimonialAreaAbout,
    ImageTransition
  },
  head() {
    return {
      title: "Sobre nós"
    };
  }
};
</script>

<style scoped>
</style>
