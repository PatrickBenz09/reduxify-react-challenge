const initialState = {
  counter: 0,
  numOfStep: 1
}

export default (state = initialState, action) => {
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
      return Object.assign({}, state, { counter: state.counter + action.payload.numOfStep })

    case "KURANG":
      console.log("---------masuk switchcase KURANG");
      // ...
      // dengan method SPREAD (es6)
      return { ...state, counter: state.counter - action.payload.numOfStep }

      case "NUM_STEP":
        return {...state, numOfStep: action.payload.num}

    default:
      console.log("---------default");
      return state
  }
}
