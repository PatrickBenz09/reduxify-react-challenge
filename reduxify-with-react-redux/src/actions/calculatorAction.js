export const multiply = (num1, num2) => {
  return {
    type: 'MULTIPY_OPERATOR',
    payload: {
      num1: num1,
      num2: num2
    }
  }
}

export const change_number1 = (num) => {
  return {
    type: 'CHANGE_NUMBER1',
    payload: {
      num: num
    }
  }
}

export const change_number2 = (num) => {
  return {
    type: 'CHANGE_NUMBER2',
    payload: {
      num: num
    }
  }
}
