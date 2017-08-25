import React from 'react'
import { connect } from 'react-redux'

const Sidebar = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col col-xs-12">
          <div className="list-group" id="list-tab" role="tablist" style={{ width: '16em', margin: 'auto 35px' }}>
          { props.pokemonData.map(poke => {
              return (
                <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
                  { poke.localized_name }
                </a>
              );
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemonData: state.pokeListStore.pokemonData
  }
}

export default connect(mapStateToProps, null)(Sidebar)
