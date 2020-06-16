import { FETCH_HOME_DED, FETCH_HOME_DEL, FETCH_HOME_TAG, FETCH_HOME_TAG_DEL, FETCH_HOME_ADD, FETCH_HOME_UPD, FETCH_HOME_PAGE } from '@/constants/actionTypes'
import { get, post } from '@/utils/request'
import api from '@/services/api'

export function pageData (options) {
  return {
    type: FETCH_HOME_PAGE,
    payload: post(api.page, options)
  }
}

export function defaultData (options) {
  return {
    type: FETCH_HOME_DED,
    payload: get(api.findUser)
  }
}

export function delData (options) {
  return {
    type: FETCH_HOME_DEL,
    payload: post(api.delete, options)
  }
}

export function addData (options) {
  return {
    type: FETCH_HOME_ADD,
    payload: post(api.add, options)
  }
}

export function updData (options) {
  return {
    type: FETCH_HOME_UPD,
    payload: post(api.upd, options)
  }
}

export function tagData (options) {
  return {
    type: FETCH_HOME_TAG,
    payload: options
  }
}

export function tagDel (options) {
  return {
    type: FETCH_HOME_TAG_DEL,
    payload: options
  }
}