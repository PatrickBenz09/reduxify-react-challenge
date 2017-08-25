import axios from 'axios'

export const getPokemon = (data) => {
  return {
    type: 'GET_POKEMON',
    payload: {
      data: data
    }
  }
}

export const wrapped_get_pokemon = () => {
  return (dispatch, getState) => {
    axios.get('https://api.opendota.com/api/heroStats')
    .then(resp => {
      let twentyHero = resp.data.slice(0, 20)
      dispatch(getPokemon(twentyHero))
    })
    .catch(err => console.log(err))
  }
}
