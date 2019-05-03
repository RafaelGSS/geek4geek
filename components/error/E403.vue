<template>
    <error>
        <template #code>
            <h1>403!</h1>
        </template>
        <template #message>
            <h3>Ops... Você não tem permissão para ver esta página!</h3>
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
