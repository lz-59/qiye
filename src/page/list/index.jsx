import React, { useState, useEffect } from 'react'
import Masonry from 'masonry-layout'//瀑布流
import imagesLoaded from 'imagesloaded'//图片加载
import InfiniteScroll from 'react-infinite-scroller'
import { post } from '@/utils/request'
import './styles.less'

export default function List () {
  const [arr, setArr] = useState([
    {id: 0, title: '123'},
    {id: 1, title: '123'},
    {id: 2, title: '123'},
    {id: 3, title: '123'},
    {id: 4, title: '123'},
    {id: 5, title: '123'},
    {id: 6, title: '123'},
    {id: 7, title: '123'},
    {id: 8, title: '123'},
    {id: 9, title: '123'},
    {id: 10, title: '123'},
    {id: 11, title: '123'},
    {id: 12, title: '123'},
    {id: 13, title: '123'},
    {id: 14, title: '123'},
    {id: 15, title: '123'},
    {id: 16, title: '123'},
    {id: 17, title: '123'},
    {id: 18, title: '123'},
    {id: 19, title: '123'},
    {id: 20, title: '123'},
    {id: 21, title: '123'},
    {id: 22, title: '123'},
    {id: 23, title: '123'},
    {id: 24, title: '123'},
    {id: 25, title: '123'},
    {id: 26, title: '123'},
    {id: 27, title: '123'},
    {id: 28, title: '123'},
    {id: 29, title: '123'},
    {id: 30, title: '123'},
    {id: 31, title: '123'},
    {id: 32, title: '123'},
    {id: 33, title: '123'},
    {id: 34, title: '123'},
    {id: 35, title: '123'},
    {id: 36, title: '123'},
    {id: 37, title: '123'},
    {id: 38, title: '123'},
    {id: 39, title: '123'},
    {id: 40, title: '123'},
    {id: 41, title: '123'},
    {id: 42, title: '123'},
    {id: 43, title: '123'},
    {id: 44, title: '123'},
    {id: 45, title: '123'},
    {id: 46, title: '123'},
    {id: 47, title: '123'},
    {id: 48, title: '123'},
    {id: 49, title: '123'},
    {id: 50, title: '123'},
    {id: 51, title: '123'},
    {id: 52, title: '123'},
    {id: 53, title: '123'},
    {id: 54, title: '123'},
    {id: 55, title: '123'},
    {id: 56, title: '123'},
    {id: 57, title: '123'},
    {id: 58, title: '123'},
    {id: 59, title: '123'},
    {id: 60, title: '123'},
    {id: 61, title: '123'},
    {id: 62, title: '123'},
    {id: 63, title: '123'},
    {id: 64, title: '123'},
    {id: 65, title: '123'},
    {id: 66, title: '123'},
    {id: 67, title: '123'},
    {id: 68, title: '123'},
    {id: 69, title: '123'},
    {id: 70, title: '123'},
    {id: 71, title: '123'},
    {id: 72, title: '123'},
    {id: 73, title: '123'},
    {id: 74, title: '123'},
    {id: 75, title: '123'},
    {id: 76, title: '123'},
    {id: 77, title: '123'},
    {id: 78, title: '123'},
    {id: 79, title: '123'},
    {id: 80, title: '123'},
  ])
  useEffect(() => {
    waterfallFlow()
  }, [arr])

  const waterfallFlow = () => {
    const elLoad = imagesLoaded('.tw')
    elLoad.on('always', () => {
      const el = document.querySelector('.tw')
      new Masonry(el, {
        itemSelector: '.image',
        columnWidth: '.image',
        fitWidth: true,
        gutter: 20,
      })
    })
  }

  const loadMoreData =  () => {
    post('https://blogs.zdldove.top/Home/Apis/listWithPage')
      .then(res => {
        setArr([...arr, ...res.result.list])
      })
      waterfallFlow()
  }
  return (
    <div className="list-box">
       <InfiniteScroll
          initialLoad={false}//不让它进入直接加载
          loadMore={loadMoreData}//监听ajax请求
          hasMore={true}//是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow={false}//不监听 window 滚动条 true 监听window
        >
          <div className="tw">
            {
              arr.map(i => {
              return <div key={i.id} className="image">{i.title}</div>
              })
            }
          </div>
        </InfiniteScroll>
      
    </div>
  )
}
