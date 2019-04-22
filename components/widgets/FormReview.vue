<template>
  <div class="ratting-form-wrapper">
    <slot name="title">
      <h3>Adicione seu comentário:</h3>
    </slot>
    <div class="ratting-form">
      <form action="#">
        <star-box :init=4 :maxStar=5></star-box>
        <div class="row">
          <div class="col-md-12">
            <div class="rating-form-style form-submit">
              <textarea v-model="message" placeholder="Message"></textarea>
              <input type="submit" value="Adicionar Review">
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import StarBox from "@/components/widgets/StarBox";

export default {
  components: {
    StarBox
  },
  data: () => ({
    maxStar: 5,
    message: ""
  })
};
</script>

<style scoped>
.rattings-wrapper {
  margin-bottom: 40px;
}
.ratting-form-wrapper h3 {
  color: #303030;
  font-size: 15px;
  font-weight: 400;
  line-height: 12px;
  margin: 0 0 30px;
  text-transform: uppercase;
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
</style>
