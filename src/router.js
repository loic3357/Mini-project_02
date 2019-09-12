import Vue from 'vue'
import Router from 'vue-router'
import User from './components/User.vue'
import WorkingTime from './components/WorkingTime.vue'
import WorkingTimes from './components/WorkingTimes.vue'
import ClockManager from './components/ClockManager.vue'
import ChartManager from './components/ChartManager.vue'

import HelloWorld from './components/HelloWorld'

Vue.use(Router);

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/user', component: User },
    { path: '/worktime', component: WorkingTime },
    { path: '/worktimes', component: WorkingTimes },
    { path: '/clock', component: ClockManager },
    { path: '/chart', component: ChartManager }
];

export default routes;