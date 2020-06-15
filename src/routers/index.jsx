import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login, Reg, Home } from './assembly'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reg" component={Reg}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Redirect to="/login"/>
      </Switch>
    </BrowserRouter>
  )
}
