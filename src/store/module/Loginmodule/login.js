const state = {
    username: 'test',
	  password: 'test' ,
    authenticated: false
  };
  const getters = {};
  const actions = {};
  const mutations = {
    setAuthentication(state, status) {
      state.authenticated = status;
    }
  };
  
  export default { 
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };