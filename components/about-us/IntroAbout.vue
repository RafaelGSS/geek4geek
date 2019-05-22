<template>
  <div class="row">
    <div class="col-lg-6 col-md-7 d-flex align-items-center">
      <div class="overview-content-2">
        <h2>Bem vindo ao Geek4Geek!</h2>
        <p
          class="paragraph-blog"
        >Devita Shop is a premium HTML template designed and develoved from the ground up with the sole purpose of helping you create an astonishing, the beautiful and user friendly website that will boost your product’s sales.</p>
        <p>The theme design package provides a complete Magento theme set for your online store according to your desired theme. This includes all Magento themes that are required for your online store's successful implementation.</p>
        <div class="overview-btn mt-45">
          <button-default style="width: 40%;">Fale conosco!</button-default>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-5">
      <div class="text-center">
        <a href="#logo-geek4geek">
          <full-banner src="/img/banner/about-us.jpg" alt="Sobre nós banner"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDefault from "@/components/ui/button/ButtonDefault";
import FullBanner from "@/components/banner/FullBanner";

export default {
  components: {
    ButtonDefault,
    FullBanner
  }
};
</script>

<style lang="scss" scoped>
.overview-content-2 > h2 {
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 24px;
  padding-bottom: 28px;
  position: relative;
  text-transform: uppercase;
}
.overview-content-2 > h2::before {
  background-color: #dddddd;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transition: all 0.4s ease 0s;
  width: 80px;
}
.overview-content-2 > p.paragraph-blog {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 21px;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .overview-content-2 > h2 {
    font-size: 30px !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .overview-content-2 > h2 {
    font-size: 25px !important;
  }
}
@media (max-width: 767px) {
  .overview-content-2 {
    margin-bottom: 50px !important;
  }
  .overview-content-2 > h2 {
    font-size: 20px !important;
  }
}
</style>
