<template>
  <form class="header-search-form" :action="action">
    <input v-model= "searchText" type="text" name="-header-search-form" :placeholder="placeholder">
    <button>
      <i class="ion-ios-search-strong" :title="title" :alt="alt"></i>
    </button>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Procurar'
    },
    alt: {
      type: String,
      default: 'Procure na loja'
    },
    placeholder: {
      type: String,
      default: 'Procure toda loja aqui ...'
    },
    action: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped>
form {
  position: relative;
}

form input {
  background: transparent none repeat scroll 0 0;
  border: 2px solid #ddd;
  box-shadow: none;
  color: #fff;
  font-size: 13px;
  height: 45px;
  padding: 0px 45px 0 16px;
  width: 330px;
  border-radius: 0 7px 7px 0;
}
form input[type="text"]::-moz-placeholder {
  color: #fff !important;
  outline: 0 !important;
  border-width: 0 !important;
  opacity: 1;
}
form input[type="text"]::-webkit-input-placeholder {
  color: #fff !important;
  outline: 0 !important;
  border-width: 0 !important;
  opacity: 1;
}
form input[type="text"]::-ms-input-placeholder {
  color: #fff !important;
  outline: 0 !important;
  border-width: 0 !important;
  opacity: 1;
}

form button {
  background-color: #3cb371;
  border: medium none;
  border-radius: 0 5px 5px 0;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 100%;
  padding: 0 14px;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.3s ease 0s;
}
form button:hover {
  background-color: #fff;
  color: #3cb371;
}

</style>


