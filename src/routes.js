import HomePage from './components/HomePage.vue'
import TabloB from './components/TabloB.vue'
import ToD from './components/ToD.vue'
import FormS from './components/FormS.vue'


const routes=[
{path: '/Editor', component: HomePage ,name:"home"},
{path: '/tablo', component: TabloB ,name:"tablo"},
{path: '/ToD', component: ToD ,name:"ToD"},
{path: '/form', component: FormS ,name:"FormS"},




]
export default routes 