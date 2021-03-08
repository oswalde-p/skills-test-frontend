<script>

export default {
  name: 'UserListItem',
  props: {
    user: Object,
  },
};
</script>

<template lang="pug">
  .user
    span.name {{ user.name }}
    span {{ user.email }}
    span User Level: {{ user.user_level }}
    div Favourites:
      ul.favourites
        li(v-for="fav in user.fav" :key="fav") {{ fav }}
    div(v-if="this.user.meta && this.user.meta.length") Meta:
      ul.meta
        li(v-for="meta in user.meta[0].metas" :key="meta") {{ meta }}

</template>
<style lang="scss" scoped>
.user {
    color: black;
    font-size: 20px;
    padding: 2em;
    text-align: start;
}
span {
    display: block;
}

.name {
    font-weight: 600;
}
.favourites {
    display: inline;
    padding: 0;
}
.favourites li {
    background-color: white;
    border: 1px solid black;
    border-radius: 35px;
    display: inline-block;
    font-size: smaller;
    list-style: none;
    padding: 0.3em 0.5em;
    margin: 0.2em;
}
</style>
