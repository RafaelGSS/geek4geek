<template>
  <div class="login-register-form">
    <form action="#" method="post">
      <input-default placeholder="Usuário" v-model="username" type="text"/>
      <input-default placeholder="Senha" v-model="password" type="password"/>
      <input-default placeholder="Email" v-model="email" type="email"/>
      <div class="button-box">
        <button-default class="position-right">Criar conta</button-default>
      </div>
    </form>
  </div>
</template>

<script>
import InputDefault from "@/components/ui/InputDefault";
import ButtonDefault from "@/components/ui/button/ButtonDefault";

export default {
  components: {
    InputDefault,
    ButtonDefault
  },
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.position-right {
  color: $geekFontDefault;
  float: right;
  font-size: 15px;
  transition: all 0.3s ease 0s;
}
</style>
