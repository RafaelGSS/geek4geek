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
            <nav class="social-icon mr-40">
              <ul>
                <li>
                  <a
                    class="facebook"
                    href="https://www.facebook.com/Geek4Geeks"
                    target="_blank"
                    title="Facebook"
                  >
                    <i class="ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="instagram"
                    href="https://www.instagram.com/geek4geekoficial"
                    target="_blank"
                    title="Instagram"
                  >
                    <i class="ion-social-instagram-outline"></i>
                  </a>
                </li>
              </ul>
            </nav>
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
            <div class="footer-newsletter">
              <p>Redeba atualizações por-Email sobre nossa última loja e ofertas especiais.</p>
              <div id="mc_embed_signup" class="subscribe-form-2">
                <form
                  action="#"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <div id="mc_embed_signup_scroll" class="mc-form">
                    <input
                      type="email"
                      name="EMAIL"
                      class="email"
                      placeholder="Seu endereço de email..."
                      required
                    >
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div class="clear-2">
                      <input
                        type="submit"
                        value="SE INSCREVER"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button"
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

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
.social-icon {
  margin-top: 22px;
}
.social-icon ul li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 8px 10px 0;
}
.social-icon li a {
  font-size: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  line-height: 36px;
  color: #fff;
  display: inline-block;
  text-align: center;
}
.social-icon li a.facebook {
  background-color: #3c5b9b;
  border: 2px solid #3c5b9b;
}
.social-icon li a.facebook:hover {
  background-color: #fff;
  border: 2px solid #fff;
  color: #3c5b9b;
}

.social-icon li a.instagram {
  background-color: #d82b7e;
  border: 2px solid #d82b7e;
}
.social-icon li a.instagram:hover {
  background-color: #fff;
  border: 2px solid #fff;
  color: #d82b7e;
}

.footer-content ul li {
  list-style: outside none none;
  padding-bottom: 15px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.footer-newsletter > p {
  color: #ddd;
}
.subscribe-form-2 {
  margin: 16px 0 0;
}
form {
  display: block;
  margin-top: 0em;
}

.subscribe-form-2 form input {
  background: transparent none repeat scroll 0 0;
  border-image: none;
  border-style: none none solid;
  border-width: medium medium 1px;
  box-shadow: none;
  font-size: 13px;
  height: 45px;
  padding-left: 0;
  width: 100%;
}
input {
  transition: all 0.5s ease-out 0s;
  outline: medium none;
  overflow: visible;
  padding: 1px 0px;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  color: #fff;
}

.footer-widget-red-2 .subscribe-form-2 form .clear-2 input {
  background-color: #fff;
  font-weight: bold;
  border: 1px solid;
  color: #282829;
}
.subscribe-form-2 form input {
  background: transparent none repeat scroll 0 0;
}
.subscribe-form-2 form .clear-2 input {
  border: medium none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  height: inherit;
  line-height: 1;
  padding: 17px 46px;
  text-transform: uppercase;
  width: inherit;
}
[role="button"],
a,
area,
button,
input:not([type="range"]),
label,
select,
textarea {
  touch-action: manipulation;
}
input,
textarea,
select,
button {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  font: 400 13.3333px Arial;
}

.footer-content ul li:hover a {
  color: #fff;
  padding-left: 5px;
}
.subscribe-form-2 {
  margin: 16px 0 0;
}
.clear-2 {
  margin: 39px 0 0;
}

.clear-2 input:hover {
  background: #282829;
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
}
</style>

<script>
export default {};
</script>


