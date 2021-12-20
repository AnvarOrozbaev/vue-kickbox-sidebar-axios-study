export default {
  SET_CARDS_TO_STATE: (state, cards) => {
    state.cards = cards;
  },
  SET_POKEMON_TO_STATE: (state, pokemon) => {
    state.pokemon = pokemon;
  },
  SET_IS_VALID_TO_STATE: (state, isValid) =>{
    state.isValid  = isValid
  }
      
}