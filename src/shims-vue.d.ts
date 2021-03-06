declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "nprogress";
declare module "dom-to-image";
declare module "file-saver";
interface IStudent {
  name: string;
  height: number | "";
}
interface IInfo {
  className: string;
  students: Array<IStudent>;
}