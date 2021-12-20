import { createRouter, createWebHistory } from "vue-router";
import Catalog from '../components/catalog.vue'
import Auth from '../components/auth.vue'
import PokemonCard from '../components/pokemon-card.vue'
import store from "../vuex/store"


const router = createRouter({
    history: createWebHistory(),
    routes: [
   
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
   
    {
      path: '/',
      name: 'auth',
      component: Auth,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/pokemon-card',
      name: 'pokemon-card',
      component: PokemonCard,
      props: true
    },
    
  ]
})


router.beforeEach((to, from, next) => {
  if (to.name !== 'auth' && !store.state.isValid) next({ name: 'auth' })
  else next()
})



export default router;
