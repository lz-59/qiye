import React, { useState, useEffect } from 'react';
import { Table, Input, Button } from 'antd'
import { defaultData, delData, tagData, tagDel, addData, updData } from '@/actions/home'
import { Tags, Modal } from '@@'
import { connect } from 'react-redux';
import './styles.less'



function Homes (props) {
  let [ visible, setVisible ] = useState(false)
  let [ bol, setBol ] = useState(false)
  let [ obj, setObj ] = useState({})
  const { data, defaultData, delData, tagData, tags, tagDel, addData, updData, ids } = props

  const handleOk = async data => {
    if(bol){
      const res = await addData(data)
      const { info, status } = res.payload
      if(Number(status) === 200){
        console.log(info)
        defaultData()
        setVisible(false)
      }else{
        console.log(info)
      }
    }else{
      const res = await updData(data)
      const { message, status } = res.payload
      if(Number(status) === 200){
        console.log(message)
        defaultData()
        setVisible(false)
      }else{
        console.log(message)
      }
    }
  }

  const upd = (data) => {
    setVisible(true)
    setBol(false)
    setObj({...data})
  }

  const handleCancel = e => {
    setVisible(false)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      render: () => <Input placeholder="Basic usage" />
    },
    {
      render: item => {
        return (
          <span className="wy">
            <button onClick={() => upd(item)}>编辑</button>
            <button onClick={() => del(item.id)}>删除</button>
          </span>
        )
      }
    },
  ]

  useEffect(() => {
    defaultData()
  }, [])

  const add = () => {
   setVisible(true)
   setBol(true)
  }

  const del = async (id) => {
    const res = await delData({ id })
    const { info, status } = res.payload
    if(Number(status) === 200){
      console.log(info)
      defaultData()
    }else{
      console.log(info)
    }
  }

  const chk = (id) => {
    tagDel(id)
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      tagData(selectedRows)
    },
    selectedRowKeys: tags.map(v => v.id),//取消选中
    getCheckboxProps: record => ({
      name: record.name,
    }),
  }
  
  return (
    <div className="homes-box">
      <div>
        <Tags tags={tags} clk={chk} />
        <Button type="primary" className="add" onClick={add} >添加</Button>
      </div>
      <Table
        rowKey={v => v.id}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
       <Modal 
        user={obj}
        bol={bol}
        visible={visible} 
        handleOk={handleOk} 
        handleCancel={handleCancel} 
      />
    </div>
  )
}

export default connect(state => ({
  data: state.home.data,
  tags: state.home.tags,
  ids: state.home.ids,
}), {
  defaultData,
  delData,
  tagData,
  tagDel,
  addData,
  updData,
})(Homes)