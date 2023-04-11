import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: "",
      id: "",
      firstName: "",
      lastName: "",
    }
  },
  getters: {
    fullName(state) {
      return state.user.firstName + state.user.lastName;
    }
  },
  mutations: {
    updateUser(state, user) {
      state.user.username = user.username;
    }
  },
  actions: {
    // updateUser(context) {
    //   let resp;
    // }
  },
  modules: {
  }
})

