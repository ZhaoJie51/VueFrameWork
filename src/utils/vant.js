// 按需全局引入 vant组件
import Vue from 'vue'
import {Col, Row, Button, List, Cell, Tabbar, TabbarItem} from 'vant'
import 'vant/lib/index.css'

Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
