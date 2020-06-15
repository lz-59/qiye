import React from 'react'
import { Menu, Input } from 'antd'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Homes, List, Elments } from '@/routers/assembly'
import './styles.less'

const { SubMenu } = Menu

export default function Home () {
  const handleClick = e => {
    console.log('click ', e);
  }
  return (
    <div className="home-box">
      <div className="home-nav">
        <div>
          <span>AppUi</span>&nbsp;
          <span>Admin</span>
        </div>
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1', 'sub2']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title='Apps'
          >
            <Menu.Item key="1">
              <MailOutlined />
              <NavLink to="/home/homes">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <MailOutlined />
              <NavLink to="/home/list">List</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="COMPONENTS">
            <Menu.Item key="3">
              <AppstoreOutlined />
              <NavLink to="/home/elments">UI Elments</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <AppstoreOutlined />
              <NavLink to="/home/homes">Forms</NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <AppstoreOutlined />
              <NavLink to="/home/homes">Tables</NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <AppstoreOutlined />
              <NavLink to="/home/homes">Pages</NavLink>
            </Menu.Item>
            <Menu.Item key="7">
              <AppstoreOutlined />
              <NavLink to="/home/homes">JS plugins</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className="home-user">
        <div>
          <span>Forms - Wizard</span>
          <span>
            <Input.Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </span>
        </div>
        <div>
          <Switch>
            <Route path="/home/elments" component={Elments}/>
            <Route path="/home/list" component={List}/>
            <Route path="/home/homes" component={Homes}/>
            <Redirect to="/home/homes"/>
          </Switch>
        </div>
      </div>
    </div>
  )
}
