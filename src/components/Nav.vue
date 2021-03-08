<script>
// import iconUrl from '../assets/cusomer.svg'

export default {
  name: 'Nav',
  computed: {
    iconUrl() {
      return require('../assets/customer.svg') // eslint-disable-line
    },
  },
};
</script>

<template lang="pug">
    nav
      ul
        li
          img(:src="this.iconUrl" alt="" height="40px" width="40px")
          span Users

</template>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';

nav {
  background-color: white;
  bottom: 0;
  box-shadow: 0 -1px 5px 0 $gray;
  color: $gray;
  font-weight: 700;
  height: $nav-height;
  position: absolute;
  text-align: start;
  width: 100%;
}

ul {
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: 12px 20px;
}

li {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
}

</style>
