<template>
    <div class="warn">
        <img src="/img/logo/icon-geek4geek-white.png" alt="Logo Geek4Geek">
        <h1>404!</h1>
        <h3>Ops... Essa página não foi encontrada!</h3>
        <h5>Você gostaria de reportar algo ? Entre em <a href="#">contato</a> conosco!</h5>
    </div>
</template>

<script>
export default {
    mounted() {
        throw 500;
    }
}
</script>

<style scoped>
.warn {
    text-align: center;

    padding: 30px;
    margin-bottom: 50px;
}

.warn h1 {
    margin-top: 10px;
}

.warn h1, h3, h5{
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
    width: 300px
}
</style>
