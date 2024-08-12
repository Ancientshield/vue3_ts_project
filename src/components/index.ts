import SvgIcon from './SvgIcon/Index.vue';
import Pagination from './pagination/Index.vue';

const allGloablComponent = { SvgIcon, Pagination };

// 暴露自定義元件
export default {
  install(app: any) {
    // 註冊所有自定義元件
    Object.keys(allGloablComponent).forEach((key) => {
      // @ts-expect-error
      app.component(key, allGloablComponent[key]);
    });
  }
};
