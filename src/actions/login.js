import { FETCH_LOGIN } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function signUp (options) {
  return {
    type: FETCH_LOGIN,
    payload: post(api.login, options)
  }
}