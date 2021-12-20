<script>

import { collapsed, toggleSidebar, sidebarWidth } from './state'
import { mapGetters } from "vuex"
export default {
  props: {
          
  },

  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  computed: {
        ...mapGetters([
            'POKEMON',
        ]),
    },
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
           <img class="sidebar__logo" src="https://www.pikpng.com/pngl/m/58-581345_liga-pokemon-logo-clipart-pokmon-firered-and-leafgreen.png" alt="img">
      </span>
      <span v-else>Pokemon</span>
    </h1>
      <div class="sidebar-item" >
    <transition name="fade">
      <div v-if="!collapsed">
        <div class="sidebar-item__name">
             <i class=" fab fa-drupal"/> Abilities
        </div>
      <div class="sidebar-item__info">
            <ul class="sidebar-item__list">
            <li 
            class="sidebar-item__list-item"
            v-for="ability in POKEMON.abilities" 
            :key="ability.key">
            <p class="sidebar-item__list-item-inner"><span>{{ability.ability.name}}</span> 
            <span 
            class="sidebar-item__list-item-hidden" 
            v-if="ability.is_hidden">hidden</span></p>
            </li>
            </ul>
      </div>
      </div>
    </transition>    
    </div>
    <div class="sidebar-item" >
    <transition name="fade">
      <div v-if="!collapsed">
        <div class="sidebar-item__name">
             <i class="fas fa-chart-bar"/> Height
        </div>
      <div class="sidebar-item__info">
              {{POKEMON.height}}
      </div>
      </div>
    </transition>    
    </div>
     <div class="sidebar-item" >
    <transition name="fade">
      <div v-if="!collapsed">
        <div class="sidebar-item__name">
             <i class="fas fa-dumbbell"/> Base experience
        </div>
      <div class="sidebar-item__info">
            {{POKEMON.base_experience}}
      </div>
      </div>
    </transition>    
    </div>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar-item__list-item-inner{
  display: flex;
  flex-direction: column;
}
.sidebar-item__list-item-hidden{
  color: red;
  opacity: 0.5;
}
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
}
.sidebar__logo{
  width: 40px;
  height: 40px;

}
.sidebar h1 {
  height: 2.5em;
}

  .info{
   display: flex;
    height: 0;
    width: 0;
  }
  .sidebar-item__list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 20px;
    
  }
  .sidebar-item__list-item{
    list-style-type: none;
  }
  .sidebar-item__name{
    font-size: 25px;
  }
  .sidebar-item__info{
     font-size: 20px;
     margin-top: 10px;
     color: yellowgreen
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.sidebar-item:hover {
  background-color: var(--sidebar-item-hover);
}
.sidebar-item.active {
  background-color: var(--sidebar-item-active);
}
  
</style>