const queryString = require('query-string');
// FALTA FAZER REQUEST BASEADO NA QUERY
// FALTA FAZER REQUEST APÓS ROUTER.PUSH
// FALTA ADICIONAR LOADING APOS REQUEST ROUTER.PUSH
export default {
    methods: {
      addQueryStringObject (filter) {
        // location.search = queryString.stringify(filter)
        this.$router.push({ name: this.$route.name, query: filter })
      },
      addToUrl(filter, value) {
        const query = queryString.parse(location.search)
        query[filter] = value
        
        // location.search = queryString.stringify(query)
      },
      appendUrl(filter, value) {
        const query = queryString.parse(location.search)
        query[filter] = (query[filter]) ? `${query[filter]},${value}` : value

        // location.search = queryString.stringify(query)
      },
    }
}