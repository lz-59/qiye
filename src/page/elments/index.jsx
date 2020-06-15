import React, { useEffect } from 'react'
import echarts from 'echarts'
import './styles.less'

export default function Elments () {
  const option = (arr, dom) => {
    const options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: arr
      }]
    }
    dom.setOption(options)
  }
  const fn = (...arg) => {
    for(let i = 0; i < arg.length; i++){
      arg[i].resize()
    }
  }
  useEffect(() => {
    const top1 = echarts.init(document.querySelector('#el-top1'))
    const top2 = echarts.init(document.querySelector('#el-top2'))
    const top3 = echarts.init(document.querySelector('#el-top3'))
    const top4 = echarts.init(document.querySelector('#el-top4'))
    option('bar', top1)
    option('line', top2)
    option('pie', top3)
    option('scatter', top4)
    window.addEventListener('resize', fn(top1,top2,top3,top4))
    return () => {
      window.removeEventListener('resize', fn(top1,top2,top3,top4))
    }
  }, [])
  
  return (
    <div className="elment-box">
      <div id="el-top1"></div>
      <div id="el-top2"></div>
      <div id="el-top3"></div>
      <div id="el-top4"></div>
    </div>
  )
}
