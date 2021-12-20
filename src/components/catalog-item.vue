<template>
   <div
     class="catalog-item"
     @click="getPokAndToggle">
        <div v-on:click.stop>
        <router-link :to="{name:'pokemon-card', params: { pokemonDataStringify: pokemonDataStringify}}">
            <p class="pokemon-name">{{card_data.name}}</p>
        </router-link>
        </div>
            <img class="catalog-item__img" :src="pokemonUrl" alt="img" >
   </div>
</template>
<script>
import { mapActions } from "vuex"
import axios from "axios"
import { toggleSidebar} from './state'

export default {
    name: 'catalog-item',
   setup() {
    return { toggleSidebar}
  },
    props: {
      card_data: {
        type: Object,
        default() {
            return {};
      },
    },
  },
    data(){
        return {
            pokemonUrl:{},
            pokemonDataStringify: '',
            pokemon: {}

        }
    },

    mounted()  {
        
        axios(this.card_data.url, {
            method: "GET"
            })
            .then((pokemon) => {
                this.pokemonUrl = pokemon.data.sprites.other.home.front_default;
                this.pokemon = pokemon.data;
                this.pokemonDataStringify = JSON.stringify(pokemon.data);
          })
            .catch((error) => {
                console.log(error)
                return error;
          })
    },
    methods: {
        ...mapActions([
            "ADD_POKEMON_TO_STATE"
        ]),
        getPokAndToggle(){
                toggleSidebar()
                this.ADD_POKEMON_TO_STATE(this.pokemon);
             

        },
    },

}
</script>
<style >
    .catalog-item{
        border: 1px solid black;
        margin: 10px;
        font-size: 20px;
       
    }
    .catalog-item__img{
        width: 100px;
        height: 100px;
        
    }
</style>
