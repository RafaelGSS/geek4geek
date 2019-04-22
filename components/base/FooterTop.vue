<template>
  <div class="footer-area pt-60">
    <div class="container">
      <div class="row">
        <section class="col-lg-4 col-md-6">
          <div class="footer-widget footer-widget-red footer-black-color mb-40">
            <div class="footer-title mb-30">
              <h4>Sobre nós</h4>
            </div>
            <div class="footer-about">
              <p>
                Somos a melhor loja Geek do Brasil,
                oferecendo diversos produtos de alta qualidade com o menor preço.
              </p>
            </div>
            <social-icons />
          </div>
        </section>
        <section class="col-lg-2 col-md-6">
          <div class="footer-widget footer-widget-red footer-black-color mb-40">
            <div class="footer-title mb-30">
              <h4>Em formação</h4>
            </div>
            <nav class="footer-content">
              <ul>
                <li>
                  <a href="about-us.html">Sobre Nós</a>
                </li>
                <li>
                  <a href="#">Informação de Entrega</a>
                </li>
                <li>
                  <a href="#">Política de Devolução</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section class="col-lg-2 col-md-6">
          <div class="footer-widget footer-widget-red mb-40 footer-black-color">
            <div class="footer-title mb-30">
              <h4>Minha conta</h4>
            </div>
            <nav class="footer-content">
              <ul>
                <li>
                  <a href="my-account.html">Minha Conta</a>
                </li>
                <li>
                  <a href="about-us.html">Histórico de pedidos</a>
                </li>
                <li>
                  <a href="wishlist.html">Lista de Desejos</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section class="col-lg-4 col-md-6">
          <div class="footer-widget footer-widget-red-2 mb-40 footer-black-color">
            <div class="footer-title mb-30">
              <h4>Junte-se a nós agora</h4>
            </div>
            <div>
              <form-newsletter />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import FormNewsletter from "@/components/widgets/FormNewsletter";
import SocialIcons from "@/components/widgets/SocialIcons";

export default {
  components: {
    FormNewsletter,
    SocialIcons
  }
};
</script>

<style scoped>
a {
  color: #ddd;
}
a:hover {
  color: #fff;
}

.footer-area .pt-60 {
  padding-top: 40px;
}

.footer-title > h4 {
  color: #ddd;
}
.footer-title > h4,
.opening-time > h4 {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.footer-about > p {
  color: #ddd;
}
.footer-about > p {
  margin: 0px;
}

.footer-content ul li {
  list-style: outside none none;
  padding-bottom: 15px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.footer-content ul li:hover a {
  color: #fff;
  padding-left: 5px;
}

/*
* Responsive
*/

@media (max-width: 767px) {
    .footer-area.pt-65 {
    padding-top: 35px !important;
  }
    .footer-area .pt-60 {
    padding-top: 40px !important;
  }
    .footer-widget.mb-40 {
        margin-bottom: 30px !important;
    }  
    .footer-widget {
        margin-bottom: 30px !important;
        text-align: center !important;
    }
    .footer-title.mb-30 {
        margin-bottom: 15px !important;
    }
}
</style>
