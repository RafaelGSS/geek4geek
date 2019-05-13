<template>
  <section>
    <div class="container">
      <div class="pt-60 pb-65 border-top-2">
        <div class="row">
          <div class="col-12">
            <div class="footer-middle text-center">
              <nav class="footer-tag">
                <ul>
                  <li>
                    <a href="#" >Compras online</a>
                  </li>
                  <li>
                    <a href="#">Promoções</a>
                  </li>
                  <li>
                    <a href="#">Serviço ao cliente</a>
                  </li>
                  <li>
                    <a href="#">Mais populares</a>
                  </li>
                  <li>
                    <a href="#">Nossas chegadas</a>
                  </li>
                  <li>
                    <a href="#">Produtos especiais</a>
                  </li>
                  <li>
                    <a href="#">Fabricantes</a>
                  </li>
                  <li>
                    <a href="#">Pagamentos</a>
                  </li>
                  <li>
                    <a href="#">Garantia</a>
                  </li>
                  <li>
                    <a href="#">Reembolsos</a>
                  </li>
                  <li>
                    <a href="#">Desconto</a>
                  </li>
                  <li>
                    <a href="#">Termos e condições</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.footer-middle {
  padding: 0 12px;
}
.footer-tag ul li a {
  color: #ddd;
}

.footer-tag ul li a:hover {
  color: #fff;
}

.footer-tag ul li {
  display: inline-block;
  margin: 0 10px 5px;
  position: relative;
}
.footer-tag ul li::before {
  background-color: #666;
  content: "";
  height: 2px;
  position: absolute;
  right: -19px;
  top: 11px;
  transform: rotate(-67deg);
  transition: all 0.4s ease 0s;
  width: 15px;
}
.footer-tag ul li:last-child::before {
  display: none;
}
</style>
