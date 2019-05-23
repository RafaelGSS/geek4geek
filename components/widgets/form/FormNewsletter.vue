<template>
  <div class="newsletter">
    <p>Redeba atualizações por-Email sobre nossa última loja e ofertas especiais.</p>
    <div class="subscribe-form">
      <form action="#" method="post" target="_blank">
        <div>
          <input type="email" name="EMAIL" placeholder="Seu endereço de email..." required>
          <div class="clear">
            <input type="submit" value="SE INSCREVER" name="subscribe" class="button">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.newsletter > p {
  color: #ddd;
}

form {
  display: block;
  margin-top: 0em;
}

.subscribe-form form input {
  background: transparent none repeat scroll 0 0;
  border-image: none;
  border-style: none none solid;
  border-width: medium medium 1px;
  box-shadow: none;
  font-size: 13px;
  height: 45px;
  padding-left: 0;
  width: 100%;
}

.subscribe-form form .clear input {
  background-color: #fff;
  font-weight: bold;
  border: 1px solid;
  color: #282829;
}

.subscribe-form form input {
  background: transparent none repeat scroll 0 0;
}

.subscribe-form form .clear input {
  border: medium none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  height: inherit;
  line-height: 1;
  padding: 17px 46px;
  text-transform: uppercase;
  width: inherit;
}

input {
  transition: all 0.5s ease-out 0s;
  outline: medium none;
  overflow: visible;
  padding: 1px 0px;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  color: #fff;
}

[role="button"],
a,
button,
input,
button {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  font: 400 13.3333px Arial;
}

.subscribe-form {
  margin: 16px 0 0;
}

.clear {
  margin: 39px 0 0;
}

.clear input:hover {
  background: #282829;
}
</style>
