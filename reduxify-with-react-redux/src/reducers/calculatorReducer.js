const initialState = {
  number1: 0,
  number2: 0,
  result: 0
}

export default (state = initialState, action) => {
  switch(action.type)
  {
    case "MULTIPY_OPERATOR":
      console.log("------------->> Masuk MULTIPY_OPERATOR");
      return { ...state, result: (action.payload.num1 * action.payload.num2) }

    case "CHANGE_NUMBER1":
      console.log("------------->> Masuk CHANGE_NUMBER1");
      return { ...state, number1: action.payload.num }

    case "CHANGE_NUMBER2":
      console.log("------------->> Masuk CHANGE_NUMBER2");
      return { ...state, number2: action.payload.num }

    default:
      console.log("------------->> Masuk Default");
      return state
  }
}
