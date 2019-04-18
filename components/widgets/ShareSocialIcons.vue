<template>
  <div class="pro-dec-social">
    <ul>
      <li>
        <a class="share" href="#">
          <i class="ion-social-facebook"></i> Share
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO - Create generations based on array (like social icons, and receive props)
export default {};
</script>

<style scoped>
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

.pro-dec-social li a.share {
  background-color: #435f9f;
  border: 1px solid transparent;
}
.pro-dec-social li a.share:hover {
  background-color: #242424;
  border: 1px solid #242424;
  color: #fff;
}

.pro-dec-social {
  margin: 27px 0 0;
}
</style>


