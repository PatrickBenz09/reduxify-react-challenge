const initialState = {
  pokemonData: ['Charmender', 'Charizard']
}

export default (state = initialState, action) => {
  switch (action.type)
  {
    // case "":
    //   return state

    case "GET_POKEMON":
      // console.log('---------->> masuk getpokemon');
      // console.log(action.payload.data);
      return { ...state, pokemonData: action.payload.data }

    default:
      return state
  }
}
