<script>
import { mapState } from 'vuex';
import Error from './components/Error.vue';
import UsersList from './components/UsersList.vue';

export default {
  name: 'App',
  components: {
    Error,
    UsersList,
  },
  computed: mapState(['error']),
};
</script>

<template lang="pug">
  #app
    Error(v-if="this.error")
    UsersList(v-else)
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
  text-align: center;
}
</style>
