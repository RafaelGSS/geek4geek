<template>
    <div>
        <header>
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom :categories="categories"/>
        </header>
        <div>
            <slot></slot>
        </div>
        <footer>
            <FooterTop/>
            <FooterBottom/>
        </footer>
    </div>
</template>

<style scoped>
footer {
    background: #282829;
}
</style>


<script>
import HeaderTop from "~/components/Base/HeaderTop";
import HeaderMiddle from "~/components/Base/HeaderMiddle";
import HeaderBottom from "~/components/Base/HeaderBottom";
import FooterTop from "~/components/Base/FooterTop";
import FooterBottom from "~/components/Base/FooterBottom";

export default {
    components: {
        HeaderTop, HeaderMiddle, HeaderBottom, FooterTop, FooterBottom
    },
    props: {
        categories: {
            type: Array,
            default: () => (Array())
        }
    }    
}
</script>
