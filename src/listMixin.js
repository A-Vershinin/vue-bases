export default {
  data() {
    return {
      searchName: '',
      names: ['Max', 'Elena', 'Igor', 'Kate'],
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      })
    },
  },
}
