export default {
    computed: {
        loaded() {
            return !this.$apollo.loading;
        }
    },
}