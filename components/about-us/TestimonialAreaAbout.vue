<template>
  <div>
    <div class="text-center mb-40">
      <section-title>Depoimentos</section-title>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 d-flex align-items-center">
        <div class="testimonial-active about-testi-active">
          <div class="single-testimonial about-testi text-center">
            <div class="quote-icon">
              <i class="fa fa-quote-left"></i>
            </div>
            <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ”</p>
            <h4 class="author-testimonial">
              Samia Robiul
              <span>/ Web Designer</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/ui/SectionTitle";

export default {
  components: {
    SectionTitle
  }
};
</script>

<style lang="scss" scoped>
.single-testimonial > p,
.single-testimonial > h4,
.single-testimonial > h4 span {
  color: #242424;
}
.single-testimonial.about-testi > p {
  width: 73%;
}
.testimonial-active.about-testi-active {
  padding: 0;
}
.single-testimonial > p {
  color: $geekFontDefault;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  margin: 0 auto;
  width: 92%;
}
.single-testimonial > h4 {
  color: $geekFontDefault;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}
.single-testimonial > h4 span {
  color: $geekFontDefault;
  font-size: 12px;
  font-weight: 400;
  margin-left: 7px;
  text-transform: capitalize;
}
.quote-icon {
  margin: 0 0 40px;
}
.testimonial-active {
  padding: 0 40px 0 60px;
}
.author-testimonial {
  margin-top: 10px;
}
</style>
