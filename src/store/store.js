import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store =new Vuex.Store({
state:{
    user: null,
    name:null,
    token: localStorage.getItem('token'),

},
getters:{
    getToken({token}) {
      // axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
      return token ? token : null
    }


},

mutations:{  
    setUser(state, user) {
        state.user = user;
        // localStorage.setItem('id', id);
      },
      setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
     
    },
},
actions:{ 
    login(context, payload) {
      
    return axios.post(`https://api.oniki.mgsapp.com/api/dashboard/login`, {
        email: payload.email,
        password: payload.password,
    }, {
      
    // headers: {
    //   Authorization: "Bearer ${token}",
    //   token: localStorage.getItem("token")
    // }
  })
  },logout(context) {
    localStorage.removeItem('token');
    
    context.commit('setToken', '');
    context.commit('setUser', '');
  },
  me(){
    return axios.post('https://api.oniki.mgsapp.com/api/dashboard/me')
  }
}




})