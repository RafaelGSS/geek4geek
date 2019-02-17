<template>
  <div class="header-top header-top-color-2 header-top-red pt-10 pb-13">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="header-top-left">
            <ul>
              <li style="list-style: none;">
                <a href="#" title="Geek4Geek">
                  <img src="/img/logo/icon-geek4geek-white.png" width="27" alt="Logo do Geek4Geek">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <nav class="header-top-right">
            <ul>
              <li>
                <a href="wishlist.html">Lista de desejos </a>
              </li>
              <li>
                <a href="checkout.html"> Fale Conosco</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-top {
  background: #282829;
  border-bottom: 10px;
}

a{
  color: #ddd;
}
a:hover {
  color: #fff;
}

.header-top-left {
    display: flex;
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
</style>

