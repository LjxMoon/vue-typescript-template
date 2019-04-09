import store from '@/store';
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module
export default class DemoModule extends VuexModule {
  public count: number = 0;

  @Mutation
  public addCount(n: number) {
    this.count = this.count + n;
  }
}
