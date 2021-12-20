export default {
    GET_CARDS_FROM_API({commit}, value) {
        return axios(`https://pokeapi.co/api/v2/pokemon?offset=${value}&limit=200`, {
          method: "GET"
        })
          .then((cards) => {
            commit('SET_CARDS_TO_STATE', cards.data);
            return cards;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
      },
      ADD_POKEMON_TO_STATE({commit},pokemon){
        commit('SET_POKEMON_TO_STATE', pokemon)
      },
      ADD_IS_VALID_TO_STATE({commit}, isValid){
          commit('SET_IS_VALID_TO_STATE',isValid)
      }
  }