<template>
<div> <HeaderTop/> 
      <HeaderMiddle/>
      <HeaderBottom/>
<div class="container-fluid pt-5  p-0">
  <div class="row">
    <div class="col-12">
      <div class="texto-erro text-center">
        <h1>ERRO 404</h1>
        <h2>A PÁGINA NÃO FOI ENCONTRADA</h2>
      </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
      <div class="erro text-center pt-3">
        <img src="/img/error/404-erro3.png" alt>
      </div>
     </div>   
  </div>    
</div>
</div>        

</template>

<style>

.erro img {
  height: 500px;
  max-width: 100%;

}

.texto-erro h1  {
   font-size: 70px;
  font-weight: bold; 
  color: #CC0100;
}
.texto-erro h2 {
   font-size: 30px;
  font-weight: bold; 
  color:rgb(82, 78, 78);
}
</style>


<script>
import HeaderTop from "~/components/HeaderTop.vue";
import HeaderMiddle from "~/components/HeaderMiddle.vue";
import HeaderBottom from "~/components/HeaderBottom.vue";
export default {
  components: {
    HeaderTop,
      HeaderMiddle,
       HeaderBottom
  }
}
</script>
