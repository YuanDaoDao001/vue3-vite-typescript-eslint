/* eslint-disable import/no-cycle */
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import module, { ModuleState } from './module';
import module2, { Module2State } from './module2';

export interface State {
  rootCount: number;
}

export interface InjectionState extends State {
  module: ModuleState;
  module2: Module2State;
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<InjectionState>> = Symbol();

const store = createStore<InjectionState>({
  // state() {
  //   return {
  //     rootCount: 111,
  //   }
  // },
  modules: {
    module,
    module2,
  },
});

export default store;

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
