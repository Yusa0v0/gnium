//全局引入组件

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@/assets/circular/stylesheet.css' // 引入全局样式文件
import '@/assets/entypo/entypo.css' // 引入全局样式文件
import '@headlessui/vue'
createApp(App).mount('#app')
