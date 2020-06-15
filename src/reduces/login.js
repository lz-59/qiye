import { FETCH_LOGIN } from '@/constants/actionTypes'
const defaultState = {
  data: {},
}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return { ...state, data: action.payload.data }
    default:
      return state
  }
}