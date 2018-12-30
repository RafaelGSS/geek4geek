<template>
  <div class="header-top header-top-color-2 header-top-red border-bottom-2 pt-10 pb-13">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-left">
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-right">
            <ul>
              <li>
                <a href="my-account.html">Regras</a>
              </li>
              <li>
                <a href="wishlist.html">Lista de desejos </a>
              </li>
              <li>
                <a href="checkout.html"> Fale Conosco</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-top-left {
    display: flex;
}

.header-top-color-2 .lang-curr-dropdown ul li a,
.header-top-color-2 .language-currency span,
.header-top-color-2 .header-top-right ul li a,
.header-middle-color-2 .header-contact-content > p,
.header-middle-color-2 .header-contact-icon i,
.header-middle-color-2 button.icon-cart span.count-amount {
    color: #242424;
}
.header-top-color-2 .header-top-right ul li a:hover {
    color: #7aed0a;
    text-decoration: underline;
}
.header-top-color-2 .language-currency::before {
    background-color: #242424;
}
.header-top-color-2 .header-search form input {
    border: 2px solid #ebebeb;
    color: #a5a5a5;
}

.header-top-right {
    float: right;
}
.header-top-right ul li {
    display: inline-block;
    float: left;
    list-style: outside none none;
    margin-left: 30px;
}
.header-top-right ul li a {
    color: #ffffff;
    font-size: 12px;
}
</style>

