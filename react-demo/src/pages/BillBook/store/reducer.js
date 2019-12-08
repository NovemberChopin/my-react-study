import * as actionTypes from './actionTypes'

const defaultState = {
  income: null,
  outcome: null,
  balance: null,
  tampDate: '',
  tampType: '收入',
  tampReason: '',
  tampMoney: null,
  recordList: []
}

const getItem = (state) => {
  return {
    key: state.recordList.length,
    date: state.tampDate,
    type: state.tampType,
    reason: state.tampReason,
    money: state.tampMoney
  }
}
const getAllIncome = (data) => {
  let income = 0
  data.map((item) => {
    if(item.type === '收入')
      income = income + item.money
    return null
  })
  return income
}
const getAllOutcome =(data) => {
  let outcome = 0
  data.map((item) => {
    if (item.type === '支出')
      outcome = outcome + item.money
    return null
  })
  return outcome
}
export default (state = defaultState, action) => {
  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.id) {
      case 'tampReason':
        newState.tampReason = action.value
        return newState
      case 'tampMoney':
        newState.tampMoney = action.value
        return newState
      default:
        break;
    }
  }
  if(action.type === actionTypes.CHANGE_SLECT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    if(action.value === 'income') {
      newState.tampType = '收入'
    } else {
      newState.tampType = '支出'
    }
    
    return newState
  }
  if (action.type === actionTypes.CHANGE_DATE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.tampDate = action.value
    return newState
  }
  if (action.type === actionTypes.ADD_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    const listItem = getItem(state);
    newState.recordList.push(listItem)
    newState.tampDate = newState.tampMoney = newState.tampType = null
    if (listItem.type === "收入") {
      newState.income = Number(newState.income) + Number(listItem.money)
    } else {
      newState.outcome = Number(newState.outcome) + Number(listItem.money)
    }
    newState.balance = newState.income - newState.outcome
    return newState
  }
  if(action.type === actionTypes.GET_RECORD_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.recordList = action.data
    newState.income = getAllIncome(action.data)
    newState.outcome = getAllOutcome(action.data)
    newState.balance = newState.income - newState.outcome
    return newState
  }
  if (action.type === actionTypes.DELETE_RECORD_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    const listItem = newState.recordList.splice(action.key, 1)
    console.log(listItem)
    if (listItem[0].type === "收入") {
      newState.income = Number(newState.income) - Number(listItem[0].money)
    } else {
      newState.outcome = Number(newState.outcome) - Number(listItem[0].money)
    }
    newState.balance = newState.income - newState.outcome
    return newState
  }

  return state
}