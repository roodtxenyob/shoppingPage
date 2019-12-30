import Tosat from "./Tosat";
const obj = {}
obj.install = function (Vue) {
  //创建组件构造器
  console.log("1")
  const toastContrustor = Vue.extend(Tosat);
  //用new的方式，根据组件构造器，创建组件对象
  const toast = new toastContrustor();
  //将组件对象，挂载到div上
  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}
export default obj
