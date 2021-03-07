<script>

export default {
  name: 'Search',
  props: {
    onUpdate: Function,
    search: Function,
    searchTerm: String,
  },
  methods: {
    updateHandler(evt) {
      this.onUpdate(evt.target.value);
    },
    searchHandler(evt) {
      evt.preventDefault();
      this.search();
    },
  },
};
</script>

<template lang="pug">
  form.search
    input.term(type="search" placholder="Search" :value="this.searchTerm" @input="this.updateHandler")
    input.button(type="submit" @click="searchHandler")

</template>
<style lang="scss" scoped>
.search {
  height: 3em;
}

.term {
  border: 1px solid white;
  border-radius: 1.5em;
  font-size: 20px;
  height: 1.5em;
  margin: 1em;
  max-width: 600px;
  padding-left: 1em;
  width: 90%;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2pt #93bb0e;
  }
}

.button {
  background-color: white;
  border: 1px solid grey;
  border-radius: 1.5em;
  font-size: 18px;
  margin-left: -95px;
}
</style>
