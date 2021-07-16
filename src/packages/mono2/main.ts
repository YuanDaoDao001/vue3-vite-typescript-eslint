import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import '@/styles/element-theme.sass';
import locale from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import App from './App.vue';
// import store, { key } from './store/index';
import router from './router';

createApp(App).use(ElementPlus, { locale }).use(router).mount('#app');
