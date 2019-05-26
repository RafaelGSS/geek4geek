<template>
  <page>
    <div class="login-register-area pt-60 pb-65">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 ml-auto mr-auto">
            <div class="login-register-wrapper">
              <tab-pane>
                <template #title>
                  <tab-pane-title :active="true" id="tab-login">Login</tab-pane-title>
                  <tab-pane-title id="tab-register">Registro</tab-pane-title>
                </template>
                <template #content>
                  <tab-pane-content :active="true" id="tab-login">
                    <form-login class="login-form-container" />
                  </tab-pane-content>
                  <tab-pane-content id="tab-register">
                    <form-register class="login-form-container" />
                  </tab-pane-content>
                </template>
              </tab-pane>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "@/components/Page";

import TabPane from "@/components/widgets/TabPane";
import TabPaneContent from "@/components/widgets/TabPaneContent";
import TabPaneTitle from "@/components/widgets/TabPaneTitle";

import FormLogin from "@/components/widgets/form/FormLogin";
import FormRegister from "@/components/widgets/form/FormRegister";

export default {
  components: {
    Page,
    TabPane,
    TabPaneContent,
    TabPaneTitle,
    FormLogin,
    FormRegister
  },
  head() {
    return { title: "Autenticação" };
  }
};
</script>

<style lang="scss" scoped>
.login-form-container {
  background: transparent none repeat scroll 0 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  padding: 80px;
  text-align: left;
}
</style>


