import Vue from 'vue';
import Vuex from 'vuex';

import apiClient from '../api-client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentPage: 1,
    loading: true,
    error: false,
    searchTerm: '',
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoadingState(state, value) {
      state.loading = value;
    },
    setErrorState(state, value) {
      state.error = value;
    },
    incrementPage(state) {
      state.currentPage += 1;
    },
    decrementPage(state) {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
    setSearchTerm(state, value) {
      state.searchTerm = value;
    },
  },
  actions: {
    fetchUsers({ commit, state }) {
      commit('setLoadingState', true);
      apiClient.get('/users', { params: { page: state.currentPage, perpage: 2 } }).then((response) => {
        commit('setUsers', response.data);
      }).catch((err) => {
        console.error('Api fetch error');
        console.error(err);
        commit('setErrorState', true);
      }).finally(() => commit('setLoadingState', false));
    },
    incrementPage({ commit }) {
      commit('incrementPage');
    },
    decrementPage({ commit }) {
      commit('decrementPage');
    },
    searchUsers({ commit, state }) {
      commit('setLoadingState', true);
      apiClient.get('/users', { params: { term: state.searchTerm } }).then((response) => {
        commit('setUsers', response.data);
      }).catch((err) => {
        console.error('Api fetch error');
        console.error(err);
        commit('setErrorState', true);
      }).finally(() => commit('setLoadingState', false));
    },
  },
  modules: {
  },
});
