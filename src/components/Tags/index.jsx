import React from 'react'
import { Tag } from 'antd'

export default function Tags (props) {
  const { tags, clk } = props
  return (
    <div>
      {
        tags.map(i => {
          return (
            <Tag closable key={i.id} onClose={() => clk(i.id)} >
              {i.name}
            </Tag>
          )
        })
      }
    </div>
  )
}
