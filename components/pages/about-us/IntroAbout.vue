<template>
  <div class="row">
    <div class="col-lg-6 col-md-7 d-flex align-items-center">
      <div class="overview-content">
        <h2>Bem vindo ao Geek4Geek!</h2>
        <p
          class="paragraph-blog"
        >O Geek4Geek é um projeto open-source que foi criado pensando em ajudar os desenvolvedores a criar de forma rápida e prática um e-commerce com Vue.</p>
        <p>Usando SSR temos o total controle das metatags e assim tendo o melhor resultado para um e-commerce de alto nível.</p>
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
.overview-content > h2 {
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 24px;
  padding-bottom: 28px;
  position: relative;
  text-transform: uppercase;
}
.overview-content > h2::before {
  background-color: $geekBlackSecondaryDefault;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transition: all 0.4s ease 0s;
  width: 80px;
}
.overview-content > p.paragraph-blog {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 21px;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .overview-content > h2 {
    font-size: 30px !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .overview-content > h2 {
    font-size: 25px !important;
  }
}
@media (max-width: 767px) {
  .overview-content {
    margin-bottom: 50px !important;
  }
  .overview-content > h2 {
    font-size: 20px !important;
  }
}
</style>
