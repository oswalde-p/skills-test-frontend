<script>
import { mapActions, mapState } from 'vuex';
import Search from './Search.vue';

export default {
  name: 'Header',
  components: {
    Search,
  },
  computed: mapState(['searchTerm']),
  methods: {
    ...mapActions(['searchUsers']),
    updateSearchTerm(value) {
      this.$store.commit('setSearchTerm', value);
    },
  },
};
</script>

<template lang="pug">
    header
      Search(
        :onUpdate="this.updateSearchTerm"
        :searchTerm="this.searchTerm"
        :search="this.searchUsers")

</template>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';

header {
    background-color: white;
    box-shadow: 0 0 4px 0 $gray;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
