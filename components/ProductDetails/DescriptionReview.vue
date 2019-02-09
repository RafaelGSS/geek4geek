<template>
  <div class="description-review-area pt-25 pb-70">
    <div class="container">
      <div class="description-review-wrapper">
        <div class="description-review-topbar nav text-center">
          <a class="active" data-toggle="tab" href="#des-details1">Descrição</a>
          <a data-toggle="tab" href="#des-details3">Reviews</a>
        </div>
        <div class="tab-content description-review-bottom">
          <div id="des-details1" class="tab-pane active">
            <div class="product-description-wrapper">{{ full_description }}</div>
          </div>
          <div id="des-details3" class="tab-pane">
            <div class="rattings-wrapper">
              <div v-if="reviews.length > 0">
                <div class="sin-rattings" v-for="review in reviews" :key="review.id">
                  <div class="star-author-all">
                    <div class="ratting-star f-left">
                      <i class="ion-star theme-color" v-for="i in review.review_star" :key="i"></i>
                      <span>({{ review.review_star }})</span>
                    </div>
                    <div class="ratting-author f-right">
                      <h3>{{ review.author }}</h3>
                      <span>{{ review.created_at }}</span>
                    </div>
                  </div>
                  <p>{{ review.review }}</p>
                </div>
              </div>
              <div v-else>
                <no-ssr>
                  <content-placeholders>
                    <content-placeholders-text :lines="3"/>
                  </content-placeholders>
                </no-ssr>
              </div>
            </div>
            <div class="ratting-form-wrapper">
              <h3>Add your Comments :</h3>
              <div class="ratting-form">
                <form action="#">
                  <div class="star-box">
                    <h2>Rating:</h2>
                    <div class="ratting-star">
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star theme-color"></i>
                      <i class="ion-star"></i>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="rating-form-style mb-20">
                        <input placeholder="Name" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="rating-form-style mb-20">
                        <input placeholder="Email" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="rating-form-style form-submit">
                        <textarea name="message" placeholder="Message"></textarea>
                        <input type="submit" value="add review">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  border-bottom: 2px solid #3cb371;
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
  color: #3cb371;
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
  background: #3cb371 none repeat scroll 0 0;
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
</style>

<script>
export default {
  props: {
    full_description:{
      type: String
    },
    reviews: {
      type: Array,
      default: () => []
    }
  }
};
</script>


