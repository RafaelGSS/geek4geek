const queryString = require('query-string');

export default {
  methods: {
    addQueryStringObject(filter) {
      const query = queryString.parse(queryString.stringify(filter, { arrayFormat: 'comma' }))
      this.$router.push({ name: this.$route.name, query })
    },
    addToUrl(filter, value) {
      const query = queryString.parse(location.search)
      query[filter] = value

      location.search = queryString.stringify(query)
    },
    appendUrl(filter, value) {
      const query = queryString.parse(location.search)
      query[filter] = (query[filter]) ? `${query[filter]},${value}` : value

      location.search = queryString.stringify(query)
    },
  }
}