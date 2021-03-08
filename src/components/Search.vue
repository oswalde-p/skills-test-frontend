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
  .search
    form
      input.term(type="search" placholder="Search" :value="this.searchTerm" @input="this.updateHandler")
      input.button(type="submit" @click="searchHandler" value="Search")

</template>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.term {
  background-color: $lightgray;
  border: 1px solid white;
  border-radius: 1.5em;
  display: inline-block;
  font-size: 20px;
  height: $header-height;
  margin: 10px;
  max-width: 600px;
  padding-left: 1em;
  width: 90%;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1pt black;
  }
}

.button {
  display: none;
}

</style>
