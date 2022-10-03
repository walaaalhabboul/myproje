import HomePage from './components/HomePage.vue'
import TabloB from './components/TabloB.vue'
// import TabloS from './components/TabloS.vue'
import ListS from './components/ListS.vue'
import TaskCard from './components/TaskCard.vue'
// import NavBr from './components/NavBr.vue'
import ToDo from './components/ToDo.vue'
import ToD from './components/ToD.vue'


const routes=[
{path: '/Editor', component: HomePage ,name:"home"},
{path: '/tablo', component: TabloB ,name:"tablo"},
{path: '/list', component: ListS ,name:"ListS"},
// {path: '/tablo1', component: TabloS ,name:"tablos"}
{path: '/TaskCard', component: TaskCard ,name:"TaskCard"},
{path: '/ToDo', component: ToDo ,name:"ToDo"},
{path: '/ToD', component: ToD ,name:"ToD"},
// {path: '/ToDo', component: NavBr ,name:"NavBr"},



]
export default routes 