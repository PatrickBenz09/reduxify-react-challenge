export const increment = (numOfStep) => {
  return {
    type: 'TAMBAH',
    payload: {
      numOfStep: numOfStep
    }
  }
}

export const decrement = (numOfStep) => {
  return {
    type: 'KURANG',
    payload: {
      numOfStep: numOfStep
    }
  }
}

export const change_num_of_step = (num) => {
  return {
    type: 'NUM_STEP',
    payload: {
      // num: parseInt(num)
      num: +num
    }
  }
}
