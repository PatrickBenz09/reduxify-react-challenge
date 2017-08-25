import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';

import Sidebar from './Sidebar'
import DisplayPanel from './DisplayPanel'
import Detail from './Detail'
import { getPokemon } from '../actions/pokeAction'

class Main extends Component {
  constructor() {
    super()
  }

  // getPokemon () {
  //   let self = this
  //   // axios.get('http://pokeapi.co/api/v2/pokemon/', { headers: {'User-Agent': "Code Club"} })
  //   axios.get('https://api.opendota.com/api/heroStats')
  //   .then(resp => {
  //     let twentyHero = resp.data.slice(0, 20)
  //     console.log(twentyHero);
  //     this.props.getPokemon(twentyHero)
  //   })
  //   .catch(err => console.log(err))
  // }
  //
  // componentDidMount () {
  //   this.getPokemon()
  // }

  render () {
    return (
      <div>
        <Router>
          <div className="row" style={{ height: '100vh' }}>
            <div className="col-3" style={{ 'background-color': '#222' }}>
              <Sidebar></Sidebar>
            </div>
            <div className="col-9">
              <Route exact path="/" component={ DisplayPanel }></Route>
              <Route exact path="/detail/:id" component={ Detail }></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     getPokemon: (data) => dispatch(getPokemon(data))
//   }
// }

// export default connect(null, mapDispatchToProps)(Main)
export default Main
