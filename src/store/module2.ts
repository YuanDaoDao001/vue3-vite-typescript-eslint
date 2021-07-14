import { Module } from 'vuex';
import { InjectionState } from './index';

export interface Module2State {
  count: number;
}
export default {
  state() {
    return {
      count: 222,
    };
  },
  mutations: {
    increment2(state) {
      state.count += 1;
    },
  },
  getters: {
    getCount2(state, getters, rootState) {
      console.log(rootState);
      return `${state.count}---=${rootState.module.count}`;
    },
  },
} as Module<Module2State, InjectionState>;
