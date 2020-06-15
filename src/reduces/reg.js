import { FETCH_REG } from '@/constants/actionTypes'
const defaultState = {
  data: {},
}

export default function reg (state = defaultState, action) {
  switch (action.type) {
    case FETCH_REG:
      return { ...state }
    default:
      return state
  }
}