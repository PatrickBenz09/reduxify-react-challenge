import React, { Component } from 'react'
import { connect } from 'react-redux'

import { wrapped_get_pokemon } from '../actions/pokeAction'

const DisplayPanel = (props) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={ () => props.getPokemon() }>Show All Pokémon</button>
      <div className="row">
      { props.pokemonData.map( (poke, index) => {
          return (
            <div class="col">
              <div className="card" style={{ 'width': '13rem', margin: 'auto auto auto 30px' }} key={ index }>
                <img className="card-img-top" src={`https://api.opendota.com${poke.img}`} alt="pokemon sprite"/>
                <div className="card-body">
                  <h4 className="card-title">{ poke.localized_name }</h4>
                  <p className="card-text">Some quis content.</p>
                  <button onClick={} className="btn btn-primary">Go somewhere</button>
                </div>
              </div>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonData: state.pokeListStore.pokemonData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemon: () => dispatch(wrapped_get_pokemon())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPanel)
