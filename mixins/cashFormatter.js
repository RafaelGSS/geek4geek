export default {
  filters: {
    toReal: value => {
      value = value.toLocaleString("pt", {
        useGrouping: false,
        minimumFractionDigits: 2
      });
      return "R$ " + value;
    }
  }
}