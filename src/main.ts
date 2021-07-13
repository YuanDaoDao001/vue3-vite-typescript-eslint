import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import './styles/element-theme.sass';
import locale from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import App from './App.vue';

createApp(App).use(ElementPlus, { locale }).mount('#app');
