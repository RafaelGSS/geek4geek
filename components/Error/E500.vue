<template>
    <error>
        <template #code>
            <h1>500!</h1>
        </template>
        <template #message>
            <h3>Ops... Algo de errado não está certo!</h3>
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