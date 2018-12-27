<template>
  <div class="header-top header-top-color-2 header-top-red border-bottom-2 pt-10 pb-13">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-left">
            <div class="language-currency lang-curr-border-2">
              <span>Language:</span>
              <div class="lang-curr-dropdown">
                <ul>
                  <li><a class="language-click" href="#">English <i class="ion-chevron-down"></i></a>
                    <ul class="language-dropdown">
                      <li><a href="#">English </a></li>
                      <li><a href="#">Bangla </a></li>
                      <li><a href="#">Hindi </a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="language-currency lang-curr-mrg">
              <span>Currency: </span>
                <div class="lang-curr-dropdown">
                  <ul>
                    <li><a class="language-click" href="#">USD <i class="ion-chevron-down"></i></a>
                      <ul class="language-dropdown">
                        <li><a href="#">USD </a></li>
                        <li><a href="#">US </a></li>
                        <li><a href="#">EURO </a></li>
                      </ul>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-right">
            <ul>
              <li>
                <a href="my-account.html">Minha conta </a>
              </li>
              <li>
                <a href="wishlist.html">Lista de desejos </a>
              </li>
              <li>
                <a href="login-register.html">Registra-se ou faça login </a>
              </li>
              <li>
                <a href="checkout.html"> Confira</a>
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
.language-currency {
    margin-right: 42px;
    position: relative;
}
.language-currency:last-child {
    margin-right: 0px;
}
.language-currency::before {
    background-color: #297ad4;
    content: "";
    height: 16px;
    position: absolute;
    right: -21px;
    top: 3px;
    width: 1px;
}
.language-currency:last-child::before {
    display: none;
}
.language-currency.lang-curr-mrg {
    line-height: 1;
    margin-top: 4px;
}
.language-currency span {
    color: #fff;
    display: inline-block;
    float: left;
    font-size: 12px;
    margin-right: 9px;
}
.lang-curr-dropdown {
    display: inline-block;
    float: left;
}
.lang-curr-dropdown ul li {
    list-style: outside none none;
    position: relative;
}
.lang-curr-dropdown ul li a {
    color: #fff;
    font-size: 12px;
}
.lang-curr-dropdown ul li a:hover,

.header-top-right ul li a:hover {
    color: #ddd;
}
.lang-curr-dropdown ul li a i {
    font-size: 10px;
    margin-left: 5px;
}
.lang-curr-dropdown ul li ul {
    background: #fff none repeat scroll 0 0;
    border: medium none;
    border-radius: 2px;
    box-shadow: 0 0 7px 0.5px rgba(0, 0, 0, 0.15);
    display: none;
    left: 0;
    padding: 15px 14px;
    position: absolute;
    width: 100px;
    z-index: 99;
    top: 150%;
}
.lang-curr-dropdown ul li ul li {
    padding-bottom: 6px;
}
.lang-curr-mrg .lang-curr-dropdown ul li ul li {
    padding-bottom: 7px;
}
.lang-curr-dropdown ul li ul li:last-child,
.lang-curr-mrg .lang-curr-dropdown ul li ul li:last-child {
    padding-bottom: 0px;
}
.lang-curr-dropdown ul li ul li > a {
    color: #454545;
    text-transform: capitalize;
    display: block;
}
.lang-curr-dropdown ul li ul li > a:hover {
    color: #0363cd;
    padding-left: 5px;
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
    color: #1d73d2;
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

<script>
export default {
  mounted() {
     $(".language-click").on("click", function() {
        $(this).parent().find('.language-dropdown').slideToggle('medium');
    });
  }
}
   
</script>
