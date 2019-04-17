<template>
    <span v-if="stock > 5" class="available-stock">
        Disponível em estoque
        <slot></slot>
    </span>
    <span v-else-if="stock >= 1" class="few-stock">
        Poucas unidades
        <slot></slot>
    </span>
    <span v-else class="out-of-stock">
        Indisponível
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        stock: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
span {
    font-weight: bold;
}
.available-stock {
  color: #667;
}
.few-stock {
  color: #e54d4d;
}
.out-of-stock {
  color: #ffae42;
}
</style>
