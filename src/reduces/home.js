import { FETCH_HOME_DED, FETCH_HOME_DEL, FETCH_HOME_TAG, FETCH_HOME_TAG_DEL, FETCH_HOME_ADD, FETCH_HOME_UPD } from '@/constants/actionTypes'
const defaultState = {
  data: [],
  tags: [],
}

export default function login (state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_DED:
      return { ...state, data: action.payload.users }
    case FETCH_HOME_ADD:
      return { ...state }
      case FETCH_HOME_UPD:
        return { ...state }
    case FETCH_HOME_DEL:
      return { ...state }
    case FETCH_HOME_TAG:
      return { ...state, tags: action.payload }
    case FETCH_HOME_TAG_DEL:
      let arr = state.tags.filter(i => i.id !== action.payload)
      return { ...state, tags: arr }
    default:
      return state
  }
}