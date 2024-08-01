import { createApp } from 'vue';
import App from '@/App.vue';

// 引用 element-plus 插件和樣式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 引用 svg 插件
import 'virtual:svg-icons-register';

createApp(App).use(ElementPlus).mount('#app');
