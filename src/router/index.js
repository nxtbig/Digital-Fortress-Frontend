import Vue from 'vue'
import Router from 'vue-router'
// import Members from '@/container/views/Members.vue'
// import Leaderboard from '@/container/views/leaderboard/Leaderboard.vue'
import Leaderboard from '../container/views/leaderboard/Leaderboard.vue'
import Rules from '../container/views/rules/Rules.vue'
import Hints from '../container/views/hints/Hints.vue'
import Round from '../container/views/round/Round.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/hints',
      name: 'hints',
      component: Hints
    },
    {
      path: '/round',
      name: 'round',
      component: Round
    }
  ]
})
