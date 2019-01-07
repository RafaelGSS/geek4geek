<template>
  <div class="product-details pt-65 pb-65">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="product-details-img">
            <div class="zoompro-border zoompro-span">
              <img
                class="zoompro"
                src="/img/product-details/product-detalis-l1.jpg"
                data-zoom-image="/img/product-details/product-detalis-bl1.jpg"
                alt
              >
              <span>-29%</span>
            </div>
            <div id="gallery" class="product-dec-slider">
              <no-ssr>
                <carousel :items="4" :nav="0">
                  <a
                    data-image="/img/product-details/product-detalis-l1.jpg"
                    data-zoom-image="/img/product-details/product-detalis-bl1.jpg"
                  >
                    <img src="/img/product-details/product-detalis-s1.jpg" alt>
                  </a>
                  <a
                    data-image="/img/product-details/product-detalis-l2.jpg"
                    data-zoom-image="/img/product-details/product-detalis-bl2.jpg"
                  >
                    <img src="/img/product-details/product-detalis-s2.jpg" alt>
                  </a>
                  <a
                    data-image="/img/product-details/product-detalis-l5.jpg"
                    data-zoom-image="/img/product-details/product-detalis-bl5.jpg"
                  >
                    <img src="/img/product-details/product-detalis-s5.jpg" alt>
                  </a>
                  <a
                    data-image="/img/product-details/product-detalis-l3.jpg"
                    data-zoom-image="/img/product-details/product-detalis-bl3.jpg"
                  >
                    <img src="/img/product-details/product-detalis-s3.jpg" alt>
                  </a>
                  <a
                    data-image="/img/product-details/product-detalis-l4.jpg"
                    data-zoom-image="/img/product-details/product-detalis-bl4.jpg"
                  >
                    <img src="/img/product-details/product-detalis-s4.jpg" alt>
                  </a>
                </carousel>
              </no-ssr>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="product-details-content">
            <h4>Phantom Remote Control Ver 2018</h4>
            <div class="rating-review">
              <div class="pro-dec-rating">
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline theme-star"></i>
                <i class="ion-android-star-outline"></i>
              </div>
              <div class="pro-dec-review">
                <ul>
                  <li>32 Reviews</li>
                  <li>Add Your Reviews</li>
                </ul>
              </div>
            </div>
            <span>$260.00</span>
            <div class="in-stock">
              <p>
                Available:
                <span>In stock</span>
              </p>
            </div>
            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            <div class="pro-dec-feature">
              <ul>
                <li>
                  <input type="checkbox"> Protection Plan:
                  <span>2 year $4.99</span>
                </li>
                <li>
                  <input type="checkbox"> Remote Holder:
                  <span>$9.99</span>
                </li>
                <li>
                  <input type="checkbox"> Koral Alexa Voice Remote Case:
                  <span>Red $16.99</span>
                </li>
                <li>
                  <input type="checkbox"> Amazon Basics HD Antenna:
                  <span>25 Mile $14.99</span>
                </li>
              </ul>
            </div>
            <div class="quality-add-to-cart">
              <div class="quality">
                <label>Qty:</label>
                <input class="cart-plus-minus-box" type="text" name="qtybutton" value="02">
              </div>
              <div class="product-action">
                <a class="action-cart" title="Add To Cart" href="#">Add to Cart</a>
                <a class="same-action" title="Wishlist" href="#">
                  <i class="fa fa-heart-o"></i>
                </a>
                <a
                  class="same-action compare-mrg"
                  data-target="#exampleCompare"
                  data-toggle="modal"
                  title="Compare"
                  href="#"
                >
                  <i class="fa fa-sliders fa-rotate-90"></i>
                </a>
              </div>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Categories:</li>
                <li>
                  <a href="#">Computer,</a>
                </li>
                <li>
                  <a href="#">Accessories,</a>
                </li>
                <li>
                  <a href="#">Laptop,</a>
                </li>
                <li>
                  <a href="#">Digital,</a>
                </li>
                <li>
                  <a href="#">Electronic,</a>
                </li>
                <li>
                  <a href="#">Free Shipping.</a>
                </li>
              </ul>
            </div>
            <div class="pro-dec-categories">
              <ul>
                <li class="categories-title">Tags:</li>
                <li>
                  <a href="#">Plazatheme,</a>
                </li>
                <li>
                  <a href="#">Table,</a>
                </li>
                <li>
                  <a href="#">Woo,</a>
                </li>
                <li>
                  <a href="#">e-Commerce,</a>
                </li>
              </ul>
            </div>
            <div class="pro-dec-social">
              <ul>
                <li>
                  <a class="tweet" href="#">
                    <i class="ion-social-twitter"></i> Tweet
                  </a>
                </li>
                <li>
                  <a class="share" href="#">
                    <i class="ion-social-facebook"></i> Share
                  </a>
                </li>
                <li>
                  <a class="google" href="#">
                    <i class="ion-social-googleplus-outline"></i> Google+
                  </a>
                </li>
                <li>
                  <a class="pinterest" href="#">
                    <i class="ion-social-pinterest"></i> Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zoompro-border {
  border: 1px solid #ebebeb;
}
.product-video {
  text-align: center;
  margin: 10px;
}
.product-video a {
  background-color: #0363cd;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  padding: 7px 20px 7px;
}
.product-video a:hover {
  background-color: #242424;
}

.product-details-content {
  position: relative;
}
.zoompro {
  width: 100%;
}
.product-dec-slider {
  padding: 0 70px;
}
.product-dec-slider.slick-initialized .slick-slide {
  text-align: center;
}
.product-dec-slider .slick-slide img {
  display: inline-block;
}
.product-dec-slider .product-dec-icon {
  color: #a4a4a4;
  display: inline-block;
  font-size: 25px;
  left: 60px;
  opacity: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 99;
}
.product-dec-slider .product-dec-icon:hover {
  color: #047afe;
}
.product-dec-slider .product-dec-icon.product-dec-next {
  left: auto;
  right: 60px;
}
.product-dec-slider:hover .product-dec-icon {
  opacity: 1;
}
.product-dec-slider a {
  padding: 0 5px;
  cursor: pointer;
}
.product-dec-slider a img {
  border: 2px solid transparent;
  cursor: pointer;
}
.product-dec-slider a.active img {
  border: 2px solid #ebebeb;
}
.product-dec-slider a.slick-active,
.product-dec-slider-2 a.slick-active {
  position: relative;
}
.product-dec-slider a.slick-active:before,
.product-dec-slider-2 a.slick-active:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 99;
  opacity: 0.3;
}
.product-dec-slider a.active.slick-active:before,
.product-dec-slider-2 a.active.slick-active:before {
  opacity: 0;
}
.product-details-img {
  position: relative;
}
.zoompro-span {
  position: relative;
}
.zoompro-span > span {
  background-color: #0363cd;
  border-radius: 3px;
  color: #fff;
  left: 30px;
  line-height: 1;
  padding: 6px 14px 5px;
  position: absolute;
  top: 20px;
  z-index: 99;
}
.product-details-content > h4 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.rating-review {
  display: flex;
}
.pro-dec-rating i {
  color: #b2b2b2;
  font-size: 17px;
}
.pro-dec-rating i.theme-star {
  color: #0363cd;
}
.pro-dec-review ul li {
  color: #047afe;
  display: inline-block;
  list-style: outside none none;
  margin-right: 38px;
  position: relative;
}
.pro-dec-review ul li:last-child {
  margin-right: 0px;
}
.pro-dec-review ul li::before {
  background-color: #e1e1e1;
  content: "";
  height: 20px;
  position: absolute;
  right: -21px;
  top: 2px;
  transition: all 0.4s ease 0s;
  width: 1px;
}
.pro-dec-review ul li:last-child::before {
  display: none;
}
.pro-dec-review {
  margin: 0 0 0 35px;
}
.product-details-content > span {
  color: #242424;
  font-size: 24px;
  font-weight: 500;
}
.rating-review {
  display: flex;
  margin: 20px 0 27px;
}
.in-stock > p span {
  color: #047afe;
}
.product-details-content > p {
  color: #242424;
  margin: 0;
}
.in-stock > p {
  margin: 0;
}
.in-stock {
  margin: 27px 0 3px;
}
.pro-dec-feature li {
  display: block;
  list-style: outside none none;
  margin: 0 0 4px;
  color: #242424;
}
.pro-dec-feature li:last-child {
  margin: 0 0 0px;
}
.pro-dec-feature li input[type="checkbox"] {
  background: #ebebeb none repeat scroll 0 0;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  color: #626262;
  font-size: 14px;
  height: 13px;
  margin: 0 13px 0 0;
  padding-left: 0;
  position: relative;
  top: 2px;
  width: 13px;
}
.pro-dec-feature li span {
  color: #047afe;
}
.pro-dec-feature {
  padding: 24px 0 37px;
}
.quality input {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #e1e1e1;
  color: #242424;
  height: 40px;
  padding: 0;
  text-align: center;
  width: 40px;
}

.quality input::-moz-placeholder {
  color: #242424;
  opacity: 1;
}
.quality input::-webkit-input-placeholder {
  color: #242424;
  opacity: 1;
}
.quality label {
  color: #242424;
  font-size: 14px;
  margin: 0 26px 0 0;
}
.quality {
  display: inline-block;
  float: left;
  margin: 0 15px 0 0;
}
.quality-add-to-cart {
  border-top: 1px solid #ebebeb;
  display: block;
  overflow: hidden;
  padding: 40px 0 37px;
}
.quality-add-to-cart .product-action {
  justify-content: left;
}
.quality-add-to-cart .product-action > a.action-cart {
  padding: 11px 40px 10px;
}
.quality-add-to-cart .product-action > a.same-action {
  width: 40px;
  height: 40px;
}
.quality-add-to-cart .product-action > a.same-action i {
  line-height: 41px;
}
.pro-dec-categories li {
  display: inline-block;
  list-style: outside none none;
  color: #242424;
}
.pro-dec-categories li.categories-title {
  margin: 0 3px 0 0;
}
.pro-dec-categories li a {
  color: #242424;
}
.pro-dec-categories li a:hover {
  color: #047afe;
}
.pro-dec-categories {
  margin: 0 0 12px;
}
.pro-dec-categories:last-child {
  margin: 0 0 0px;
}
.pro-dec-social li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 6px 0 0;
}
.pro-dec-social li a {
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  line-height: 1;
  padding: 8px 12px;
}
.pro-dec-social li a.tweet {
  background-color: #00aaf0;
  border: 1px solid transparent;
}
.pro-dec-social li a.tweet:hover {
  background-color: transparent;
  border: 1px solid #00aaf0;
  color: #00aaf0;
}
.pro-dec-social li a.share {
  background-color: #435f9f;
  border: 1px solid transparent;
}
.pro-dec-social li a.share:hover {
  background-color: transparent;
  border: 1px solid #435f9f;
  color: #435f9f;
}
.pro-dec-social li a.google {
  background-color: #e04b34;
  border: 1px solid transparent;
}
.pro-dec-social li a.google:hover {
  background-color: transparent;
  border: 1px solid #e04b34;
  color: #e04b34;
}
.pro-dec-social li a.pinterest {
  background-color: #ce1f21;
  border: 1px solid transparent;
}
.pro-dec-social li a.pinterest:hover {
  background-color: transparent;
  border: 1px solid #ce1f21;
  color: #ce1f21;
}
.pro-dec-social {
  margin: 27px 0 0;
}
.description-review-topbar {
  justify-content: center;
  display: flex;
}
.description-review-topbar a {
  border-bottom: 2px solid transparent;
  color: #666;
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  margin: 0 35px;
  padding-bottom: 10px;
}
.description-review-topbar a.active {
  border-bottom: 2px solid #047afe;
  color: #242424;
}
.tab-content.description-review-bottom {
  background-color: #fff;
  border-radius: 5px;
  border-top: 1px solid #ebebeb;
  padding: 50px 0 20px;
}
.product-description-wrapper > p {
  color: #242424;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 30px;
}
.product-description-wrapper li {
  color: #242424;
  display: block;
  font-size: 14px;
  list-style: outside none none;
  margin-bottom: 10px;
}
.product-description-wrapper li:last-child {
  margin-bottom: 0px;
}
.rattings-wrapper {
  margin-bottom: 40px;
}
.rattings-wrapper .sin-rattings {
  margin-bottom: 30px;
}
.star-author-all {
  margin-bottom: 10px;
  overflow: hidden;
}
.ratting-star i {
  color: #047afe;
  font-size: 18px;
}
.ratting-author h3 {
  color: #242424;
  float: left;
  font-size: 15px;
  font-weight: 400;
  line-height: 13px;
  margin: 0;
  text-transform: capitalize;
}
.ratting-author span {
  color: #242424;
  display: block;
  float: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 13px;
  margin-left: 15px;
}
.sin-rattings > p {
  color: #242424;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 0;
}
.ratting-form-wrapper h3 {
  color: #303030;
  font-size: 15px;
  font-weight: 400;
  line-height: 12px;
  margin: 0 0 30px;
  text-transform: uppercase;
}
.ratting-form form .star-box h2 {
  color: #242424;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin: 0 0 10px;
}
.ratting-form form .star-box {
  margin-bottom: 40px;
}
.rating-form-style input,
.rating-form-style textarea {
  background: transparent none repeat scroll 0 0;
  border: 1px solid #eceff8;
  color: #333;
}
.rating-form-style.form-submit input {
  background: #047afe none repeat scroll 0 0;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  margin-top: 30px;
  padding: 0 25px;
  text-transform: capitalize;
  width: inherit;
}
.rating-form-style.form-submit input:hover {
  background: #454545 none repeat scroll 0 0;
  color: #fff;
}
.ratting-star > span {
  margin-left: 5px;
}
.product-anotherinfo-wrapper li span {
  color: #242424;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  margin-right: 15px;
  width: 40px;
}
.product-anotherinfo-wrapper li {
  display: inline-block;
  font-size: 14px;
  list-style: outside none none;
  margin-bottom: 6px;
  text-transform: capitalize;
  margin: 0 5px 0 0;
}
.product-anotherinfo-wrapper li a {
  color: #242424;
}
.product-anotherinfo-wrapper li:last-child {
  margin-bottom: 0px;
}
.pro-dec-btn {
  position: absolute;
  right: 0;
  top: -10px;
}
.pro-dec-btn > a {
  background-color: #efefef;
  border-radius: 3px;
  color: #aaa;
  display: inline-block;
  font-size: 20px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  width: 35px;
}
.pro-dec-btn > a:hover {
  background-color: #047afe;
  color: #fff;
}

.product-img img {
  width: 100%;
}
.product-content {
  padding: 3px 18px 0;
}
.mrg-inherit .product-content {
  padding: 3px 28px 0;
}
.product-img > span {
  background-color: #0363cd;
  border-radius: 3px;
  color: #fff;
  left: 15px;
  line-height: 1;
  padding: 6px 14px 5px;
  position: absolute;
  top: 15px;
  z-index: 99;
}
.product-content > span {
  color: #555;
  font-size: 13px;
}
.product-content > h4 {
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0 13px;
}
.product-content > h4 a:hover {
  color: #0363cd;
}
.product-price-wrapper > span {
  color: #242424;
  margin: 0 2px;
}
.product-price-wrapper > span.product-price-old {
  text-decoration: line-through;
}
.product-rating i {
  color: #b2b2b2;
  font-size: 17px;
}
.product-rating i.theme-star {
  color: #0363cd;
}
.product-action-wrapper > p {
  color: #242424;
  font-size: 12px;
  line-height: 18px;
  margin: 9px 0 17px;
}
.product-action {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
}
.product-action > a {
  margin: 0 3px;
}
.product-action > a i {
  text-align: center;
}
.product-action > a.same-action {
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  font-size: 16px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  width: 35px;
}
.product-action > a.action-cart {
  background-color: #eef0f1;
  border-radius: 3px;
  color: #242424;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 9px 20px 8px;
  text-transform: uppercase;
}
.product-action > a.same-action:hover,
.product-action > a.action-cart:hover {
  background-color: #0363cd;
  color: #fff;
}
.product-rating {
  position: relative;
}
.product-rating::before,
.product-rating::after {
  background-color: #eef0f1;
  content: "";
  height: 1px;
  position: absolute;
  top: 11px;
  transition: all 0.4s ease 0s;
  width: 52px;
}
.product-rating::before {
  left: 0;
}
.product-rating::after {
  right: 0;
}
.product-price-wrapper {
  display: block;
  transition: all 0.3s ease 0s;
}

.product-img-slider .cr-navigation {
  background: rgba(239, 239, 239, 0.9) none repeat scroll 0 0;
  border-radius: 100%;
  color: #242424;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  height: 36px;
  left: 10px;
  line-height: 36px;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transition: all 0.3s ease-out 0s;
  width: 36px;
  z-index: 1;
  transform: translateY(-50%);
}
.product-img-slider .cr-navigation.cr-navigation-next {
  left: auto;
  right: 10px;
}
.devita-product-2:hover .cr-navigation {
  opacity: 1;
}
.product-img-slider .cr-navigation:hover {
  color: #fff;
  background: rgba(3, 99, 205, 0.8) none repeat scroll 0 0;
}
</style>

<script>
export default {
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/3.0.8/jquery.elevatezoom.min.js' }
      ],
    }
  },
  mounted() {
    $(".zoompro").elevateZoom({
      gallery: "gallery",
      galleryActiveClass: "active",
      zoomWindowWidth: 300,
      zoomWindowHeight: 100,
      scrollZoom: false,
      zoomType: "inner",
      cursor: "crosshair"
    });
  }
};
</script>

