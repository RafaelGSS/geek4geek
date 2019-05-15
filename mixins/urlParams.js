// ADICIONAR QUERY E CRIAR MÉTODO PARA ADICIONAR QUERY JUNTO COM REQ.PARAMS
// FAZER ESSE FILTRO SE REFLETIR NO GRAPHQL
export default {
    methods: {
        addToUrl(filter, value) { 
            let query = {}
            query[filter] = value
            this.$router.push({ query });
        },
        cleanParams() {
            
        },
    }
}