import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import { pageData } from '@/actions/home'
import './styles.less'

export default connect(state => ({
  pages: state.home.pages
}), {
  pageData
})(List)


let id

function List (props) {
  const { pageData, pages } = props
  const [scr, setScr] = useState(0)
  const [max, setMax] = useState(0)
  
 const scrollFn = () => {
  setScr(document.documentElement.scrollTop)
  if(scr > max){
    setMax(scr)
    if (!id) {
      id = setTimeout(() => {
        id = null
        pageData()
      }, 1000)
    }
  }
 }

 useEffect(() => {
  pageData()
 } ,[])

 useEffect(() => {
  window.addEventListener('scroll', scrollFn)
  return () => window.removeEventListener('scroll', scrollFn)
 } ,[scr])

  return (
    <div className="list-box">
        <div className="tw">
          {
            pages.map(i => {
            return <div key={i.id} className="tw-ds">{i.title}</div>
            })
          }
        </div>
        <div><Spin /></div>
    </div>
  )
}
