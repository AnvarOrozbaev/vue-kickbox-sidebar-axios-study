<template>

    <div class="catalog">
        <div class="search">
      <input
          type="text"
          v-model.trim="search"
          placeholder="Search pokemon..."
          @keyup="debounce(findPokAlt(),500)"/>
    </div>
             <ul class="catalog__page-list">
              <li class="catalog__page-list-item"><button class="btn btn-primary" v-if="api.previous" @click="previous">Previous</button></li>
                 <li 
                    class="catalog__page-list-item" 
                    @click="fetchPokemons(0)"  >1</li>
                 <li 
                    class="catalog__page-list-item" 
                    @click="fetchPokemons(200)" >2</li>
                 <li 
                    class="catalog__page-list-item" 
                    @click="fetchPokemons(400)" >3</li>
                 <li 
                    class="catalog__page-list-item" 
                    @click="fetchPokemons(600)" >4</li>
                 <li 
                    class="catalog__page-list-item" 
                    @click="fetchPokemons(800)" >5</li>
                 <li 
                    class="catalog__page-list-item" 
                    @click="fetchPokemons(1000)">6</li>      
              <li class="catalog__page-list-item">
                  <button class="btn btn-primary" v-if="api.next" @click="next">Next</button>
             </li>
             </ul>
         <sidebar />
        <div class="catalog__list">
            <catalog-item
                v-for="card in api.results"
                :key="card.key"
                :card_data="card" />
        </div>

    </div>
</template>
<script>
import  CatalogItem from "./catalog-item.vue";
import Sidebar from "./sidebar.vue"
import { sidebarWidth } from '../components/state'
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import axios from 'axios';
export default {
    name: "v-catalog",
    components: {
      CatalogItem,
      Sidebar
    },
    setup() {
        return { sidebarWidth }
  },
    mounted() {
      
    },
    watch: {},
    computed: {
    ...mapGetters(['CARDS']),
  },
 
  created() {
       this.fetchPokemons();
       this.findPok();
   
    
  },
  methods: {

    debounce (fn,d){
        let timer;
        return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
                fn.apply(context, args);
            }, d)
    }
},
    findPokAlt(){
        this.arr = this.arr2
            if (this.search) {
                this.api.results = this.arr.filter(pok =>
                pok.name.toLowerCase().includes(this.search.toLowerCase()));                  
            }  else {

                this.fetchPokemons()
            }
    },
      
    findPok(){
            //пушим всех покемонов в один массив
            for( let i =0; i<=5; i++){
                let value = 200*i;
                let  itemData = [];
                let url = `https://pokeapi.co/api/v2/pokemon?offset=${value}&limit=200`;
                axios.get(url)
                    .then(({ data }) => {
                        itemData = data.results;
                       // console.log(itemData);
                        this.arr2.push(...itemData) ;        
                    })
            }  
            // if (this.search) {
            //     this.api.results = this.arr.filter(pok =>
            //     pok.name.toLowerCase().includes(this.search.toLowerCase()));                  
            // } 
                 
    },
    fetchPokemons(offset = 0) {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=200`
        axios.get(url)
        .then(({ data }) => (this.api = data))
        .catch((error) => {
          console.log(error)
          return error;
      });
    },
    next() {
      this.fetchPokemons(this.api.next);
    },
    previous() {
      this.fetchPokemons(this.api.previous);
    },
  
    ...mapActions(["GET_CARDS_FROM_API"]),


  },
  data() {
    return {
      api: {},
      arr: [],
      arr2:[],
      search:'',
      navOpen: true
    }
  },
};
</script>
<style >
    .catalog__list{
        display: grid;
        grid-template-columns: repeat(5, 1fr ) ;
    }
    .catalog__page-list{
        display: flex;
        justify-content: center;
    }
    .catalog__page-list-item{
        list-style-type: none;
        margin: 20px;
        cursor: pointer;
        /* text-decoration-color: brown; */
    }

</style>