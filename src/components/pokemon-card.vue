<template>
    <div class="pokemon-card" >
            <div class="name inner"> 
                <h2>Name</h2>
                <span>
                    {{ pokemonData.name}}
                </span>
            </div>
       <div class="abilities inner">
               <h2>Abilities</h2> 
           <ul class="pokemon-card__list">
                <li 
                    class="pokemon-card__list-item"
                    v-for="ability in pokemonData.abilities" 
                    :key="ability.key">
            <p class="pokemon-card__list-item-inner">
                <span>
                    {{ability.ability.name}}
                </span> 
            <span 
            class="pokemon-card__list-item-hidden" 
            v-if="ability.is_hidden">hidden</span></p>
                </li>
            </ul>
       </div>
       <div class="base_experience inner">
           <h2>Base_experience</h2> 
               <p class="pokemon-card__list-item">{{pokemonData.base_experience}}</p> 
       </div>
       <div class="forms inner">
           <h2>Forms</h2> 
           <ul class="pokemon-card__list">
                <li 
                    class="pokemon-card__list-item"
                    v-for=" form in pokemonData.forms" 
                    :key="form.key">
            <p class="pokemon-card__list-item-inner">
                {{form.name}}
           </p>
                </li>
            </ul>
       </div>
       <div class="height inner">
           <h2>Height</h2> 
           <p class="pokemon-card__list-item">{{pokemonData.height}}</p> 
       </div>
       <div class="moves inner">
           <h2>Moves</h2>
           <ul class="pokemon-card__list">
                <li 
                    class="pokemon-card__list-item"
                    v-for=" move in pokemonData.moves" 
                    :key="move.key">
            <p class="pokemon-card__list-item-inner">
                {{move.move.name}}
           </p>
                </li>
            </ul>
       </div>
       <div class="sprites inner">
            <h2>Sprites</h2>
            <div class="sprites_img-wrapper">
            <img class="sprites__img" v-if="pokemonData.sprites.back_default" :src="pokemonData.sprites.back_default" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.back_female" :src="pokemonData.sprites.back_female" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.back_shiny" :src="pokemonData.sprites.back_shiny" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.back_shiny_female" :src="pokemonData.sprites.back_shiny_female" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.front_default" :src="pokemonData.sprites.front_default" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.front_female" :src="pokemonData.sprites.front_female" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.front_shiny" :src="pokemonData.sprites.front_shiny" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.front_shiny_female" :src="pokemonData.sprites.front_shiny_female" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.other.dream_world.front_default" :src="pokemonData.sprites.other.dream_world.front_default" alt="img" >
            <img class="sprites__img" v-if="pokemonData.sprites.other.dream_world.front_female" :src="pokemonData.sprites.other.dream_world.front_female" alt="img" >
            </div>
       </div>
    </div>
</template>
<script>

export default {
    name: 'pokemon-card',
    props: {
        pokemonDataStringify: {
          type: String,
          default() {
            return '';
          },
        }
    },
    mounted() {
        console.log(JSON.parse(this.pokemonDataStringify))
    },
    data() {
        return {
            pokemonData: JSON.parse(this.pokemonDataStringify)
        }
    },
}        


</script>
<style lang="scss">
.sprites_img-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
    .pokemon-card{
        background: #dfdf;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        &__list{
            display: grid;
            grid-template-columns: 1fr 1fr ;
             overflow:scroll;
        }
            &__list-item{
                list-style-type: none;
            }
        &__list-item-hidden{
            margin-left: 10px;
            color: rgb(0, 4, 255);
        }
    }
    .sprites__img{
        width: 70px;
        height: 70px;
    }
    .inner {
        border: 1px solid black;
        height: 300px;
        overflow:scroll;
    }
    
</style>