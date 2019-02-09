<template>
    <div class="warn">
        <img src="/img/logo/icon-geek4geek-white.png" alt="Logo Geek4Geek">
        <h1>500!</h1>
        <h3>Ops... Algo de errado não está certo!</h3>
        <h5>Tente novamente mais tarde, ou <a href="#">contato</a> conosco!</h5>
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
