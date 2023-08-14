import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '../constan'
import Home from  '../pages/Home.vue'
import BlockAdd from  '../pages/BlockAdd.vue'
import BlockUpdate from  '../pages/BlockUpdate.vue'
import BlockDelete from  '../pages/BlockDelete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home
    },

    {
      path: ROUTES_PATHS.BlockAdd,
      name: ROUTES_PATHS.BlockAdd,
      component: BlockAdd
    },

    {
      path: ROUTES_PATHS.BlockUpdate,
      name: ROUTES_PATHS.BlockUpdate,
      component: BlockUpdate
    },

    {
      path: ROUTES_PATHS.BlockDelete,
      name: ROUTES_PATHS.BlockDelete,
      component: BlockDelete
    },

      
     
  ]
})

export default router
