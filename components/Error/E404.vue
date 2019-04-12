<template>
    <error>
        <template #code>
            <h1>404!</h1>
        </template>
        <template #message>
            <h3>Ops... Essa página não foi encontrada!</h3>
        </template>
    </error>
</template>

<script>
import Error from "@/components/error/Error";

export default {
    components: {
        Error
    }    
}
</script>
