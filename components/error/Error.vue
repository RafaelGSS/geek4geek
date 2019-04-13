<template>
  <div class="warn">
    <img src="/img/logo/icon-geek4geek-white.png" alt="Logo Geek4Geek">
    <slot name="code">
      <h1>LOL!</h1>
    </slot>
    <slot name="message">
      <h3>Ops... Isso é estranho.</h3>
    </slot>
    <h5>
      Você gostaria de reportar algo ? Entre em
      <a href="#">contato</a> conosco!
    </h5>
  </div>
</template>

<style scoped>
.warn {
  text-align: center;

  padding: 30px;
  margin-bottom: 50px;
}

.warn h1 {
  margin-top: 10px;
}

.warn h1,
h3,
h5 {
  color: #fff;
}
h5 {
  padding-top: 14px;
}

a {
  color: #3cb371;
}
img {
  padding: 10px;
  width: 300px;
}
</style>
