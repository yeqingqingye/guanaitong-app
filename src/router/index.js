import Vue from 'vue'
import Router from 'vue-router'

import example from '../components/example';
import device from '../components/device';
import no from '../components/no';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/device', component: device, name: 'device'},
    {path: '/example', component: example, name: 'example'},
    {path: '*', component: no, name: 'no'},
  ]
});
