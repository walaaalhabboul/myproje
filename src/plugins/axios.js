import axios from "axios";
import {store} from '@/store/store'


export default () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
    store.dispatch('me').then(res =>{
    store.commit('setUser',res.data.data)
 
})
}
