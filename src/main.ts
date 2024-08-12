import { createApp } from 'vue';
import App from '@/App.vue';

// 引用 element-plus 插件和樣式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 引用 svg 插件
import 'virtual:svg-icons-register';

// 將 SvgIcon 元件全局引用
// import SvgIcon from '@/components/SvgIcon/Index.vue';

// 進階：將所有自定義元件都全局引用
import GlobalComponent from '@/components';

const app = createApp(App);

// 註冊 SvgIcon 為全域元件
// app.component('SvgIcon', SvgIcon);

app.use(GlobalComponent);

app.use(ElementPlus).mount('#app');
