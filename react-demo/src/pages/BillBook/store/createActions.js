import * as actionTypes from './actionTypes'
import axios from 'axios';

export const getInputAction = (value, id) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value,
  id
})

export const getSlectAction = (value) => ({
  type: actionTypes.CHANGE_SLECT_CHANGE,
  value
})

export const getDateAction = (value) => ({
  type: actionTypes.CHANGE_DATE_CHANGE,
  value
})
export const getAddAction = () => ({
  type: actionTypes.ADD_INPUT_VALUE
})

const initRecordListAction = (data) => ({
  type: actionTypes.GET_RECORD_LIST,
  data
})

export const getRecordList = () => {
  return (dispatch) => {
    axios.get('/api/recordList.json').then((res) => {
      dispatch(initRecordListAction(res.data.data))
    })
  }
}

export const deleteRecordList = (key) => ({
  type: actionTypes.DELETE_RECORD_LIST,
  key
})