import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

// export default createStore(rootReducer)

// Ingin coba reducernya langsung di store aja
export default createStore((state = { counter: 0 }, action) => {
  console.log("--------------->masuk store & reducer");
  console.log(action);
  console.log(state);
  switch(action.type)
  {
    case "TAMBAH":
      console.log("---------masuk switchcase TAMBAH");
      // Menggunakan konsep immutable, ga boleh ubah value.
      // jadi buat object baru, dan ubah sesuai kebutuhan, itu yg di return
      // dengan method Object.assign (merepotkan bgt cara ini)
      return Object.assign({}, state, { counter: state.counter + action.payload.num })

    case "KURANG":
      console.log("---------masuk switchcase KURANG");
      // Menggunakan konsep immutable, ga boleh ubah value.
      // jadi buat object baru, dan ubah sesuai kebutuhan, itu yg di return
      // dengan method SPREAD (es6)
      return { ...state, counter: state.counter - action.payload.num }

    default:
      console.log("---------default");
      return state
  }
})
