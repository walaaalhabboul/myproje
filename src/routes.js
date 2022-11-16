import HomePage from './components/HomePage.vue'
import TabloB from './components/TabloB.vue'
import ToD from './components/ToD.vue'
import FormS from './components/FormS.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import UserInfo from './components/UserInfo.vue'



const routes=[
{path: '/Editor', component: HomePage ,name:"home"},
{path: '/tablo', component: TabloB ,name:"tablo"},
{path: '/ToD', component: ToD ,name:"ToD"},
{path: '/form', component: FormS ,name:"FormS"},
{path: '/Signup', component: SignUp ,name:"Signup"},
{path: '/SignIn', component: SignIn ,name:"SignIn"},
 {path: '/UserInfo', component: UserInfo ,name:"UserInfo"},


]
export default routes 