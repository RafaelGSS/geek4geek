<template>
  <div class="megamenu">
    <a href="#">
      LOJA
      <i class="ion-chevron-down"></i>
    </a>
    <ul class="mega-menu">
      <li>
        <ul>
          <li>
            <ul>
              <li class="mega-menu-title">Grupo Demonstração 01</li>
              <li>
                <a href="index.html">Home - electronics</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="mega-menu-title">Grupo Demonstração 02</li>
              <li>
                <a href="index-game.html">Home - game</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="mega-menu-title">Grupo Demonstração 03</li>
              <li>
                <a href="index-watch.html">Home - watch</a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="mega-menu-title">Grupo Demonstração 04</li>
              <li>
                <a href="index-organic.html">
                  Home - Organic
                  <span class="red">New</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="mega-menu-title">Grupo Demonstração 05</li>
              <li>
                <a href="index-shoe.html">
                  Home - Shoe
                  <span class="red">New</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mega-menu {
  background-color: rgba(255, 255, 255, 0.97);
  border-top: 1px solid #dcdcdc;
  display: block;
  left: 0;
  padding: 33px 0px 62px 0;
  position: absolute;
  text-align: left;
  top: 100%;
  transform: rotateX(90deg);
  transform-origin: center top 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  width: 100%;
  z-index: 999;
}
.megamenu:hover .mega-menu {
  transform: rotateX(0deg);
  visibility: visible;
}

ul li {
  margin-right: 0;
  display: block;
}

ul li a {
  color: #555;
  font-weight: 400;
  line-height: 28px;
  text-transform: capitalize;
  display: block;
  text-align: left;
}

ul li a:hover {
  color: #3cb371;
  padding-left: 10px;
}

ul.mega-menu > li {
  width: 1170px;
  margin: 0 auto;
}
/**/
.mega-menu-title {
  color: #242424;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 17px;
}

ul.mega-menu > li > ul > li {
  border-right: 1px solid #ebebeb;
  display: inline-block;
  float: left;
  margin-right: 16px;
  width: 16%;
}

ul.mega-menu > li > ul > li:last-child {
  border-right: none;
}

ul.mega-menu > li > ul > li ul li a {
  display: inline-block;
  position: relative;
}

ul.mega-menu > li > ul > li ul li a span {
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  line-height: 1;
  padding: 2px 5px 3px;
  position: absolute;
  right: -40px;
  top: 7px;
}

ul.mega-menu > li > ul > li ul li a span.red {
  background-color: #df2121;
}

.megamenu a {
  color: #fff;
  display: inline-block;
  font-weight: 500;
  line-height: 55px;
  text-transform: uppercase;
}
.megamenu a i {
  color: #3cb371;
  font-size: 12px;
  margin-left: 6px;
}

ul li a:hover {
  color: #3cb371;
}
</style>


