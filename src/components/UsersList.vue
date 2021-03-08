<script>
import { mapActions, mapState } from 'vuex';
import UserListItem from './UserListItem.vue';
import Header from './Header.vue';
import Nav from './Nav.vue';

export default {
  name: 'UsersList',
  components: {
    Header,
    UserListItem,
    Nav,
  },
  computed: mapState(['users', 'currentPage', 'error', 'loading']),
  methods: {
    ...mapActions(['fetchUsers', 'incrementPage', 'decrementPage']),
    previousPage(evt) {
      if (evt.code && evt.code !== 'Enter') return;
      if (this.currentPage === 1) return;
      this.decrementPage();
      this.fetchUsers();
    },
    nextPage(evt) {
      if (evt.code && evt.code !== 'Enter') return;
      this.incrementPage();
      this.fetchUsers();
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<template lang="pug">
  section
    Header
    .loading(v-if="this.loading") Loading...
    .usersList(v-else)
      UserListItem(v-for="user in this.users" :key="user._id" :user="user")
      .pageControls
        a.previous(@click="this.previousPage" @keydown="this.previousPage" tabindex=0) Previous
        span Page {{ this.currentPage  }}
        a.next(@click="this.nextPage" @keydown="this.nextPage" tabindex=0) Next
    Nav

</template>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';

section {
  background-image: url("https://assets.website-files.com/58c9b6bd816062e15b47a6e6/5ff53690208bb5a99cf0a753_1_background%20teal%202.svg");
  background-position: 50% 100%;
  background-size: cover;
  color: black;
  height: 100%;
  overflow: auto;
}

.loading {
  color: white;
  margin-top: $header-height + 20px;
}

.usersList {
  height: calc(100% - 140px);
  position: relative;
  margin-top: $header-height;
}

.pageControls {
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
}

  a {
    background-color: white;
    border: 1px solid black;
    box-shadow: 0 2px 0 0 #000;
    cursor: pointer;
    color: black;
    display: inline-block;
    font-weight: 700;
    padding: 16px 24px;
    margin: 0 2em 10px;
    width: 16vw;
    &:active {
      background-color: #93bb0e;
    }
    &:disabled {
      background-color: gray;

    }
}

</style>
