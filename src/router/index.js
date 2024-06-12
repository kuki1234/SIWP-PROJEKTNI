// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView  from '../components/HomeView.vue'
import LeagueTables  from '../components/LeagueTables.vue'
import PlayerTransfers  from '../components/PlayerTransfers.vue'
import TheStadiums from '../components/TheStadiums.vue'
import ThePrizes from '../components/ThePrizes.vue'

const routes = [
  { path: '/', component: HomeView  },
  { path: '/tables', component: LeagueTables  },
  { path: '/transfers', component: PlayerTransfers  },
  { path: '/stadiums', component: TheStadiums  },
  { path: '/prizes', component: ThePrizes  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router