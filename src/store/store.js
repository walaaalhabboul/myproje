import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store =new Vuex.Store({
state:{
    userId: null,
    token: null,

},
getters:{
    token(state) {
        return state.token;
      },
    
},

mutations:{  
    setUser(state, payload) {
  
        state.userId = payload.userId;
     
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
    
    context.commit('setToken', {
      token: null,
    
    });
  },
  getitem(context)
  { const token = localStorage.getItem('token');}




}




})