<template>
  <div class="login-form-container">
    <div class="login-register-form">
      <form action="#" method="post">
        <input-default type="text" v-model="username" placeholder="Usuário"/>
        <input-default type="password" v-model="password" placeholder="Senha"/>
        <div class="button-box">
          <div class="login-toggle-btn">
            <input-default type="checkbox" v-model="remember"/>
            <label>Lembrar</label>
            <button-default class="position-right">Entrar</button-default>
          </div>
        </div>
      </form>
    </div>
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
      remember: false
    };
  }
};
</script>

<style lang="scss" scoped>
.login-toggle-btn {
  padding: 10px 0 19px;
}

label {
  color: $geekFontDefault;
  font-size: 15px;
  font-weight: 400;
}
.position-right {
  color: $geekFontDefault;
  float: right;
  font-size: 15px;
  transition: all 0.3s ease 0s;
}
</style>
