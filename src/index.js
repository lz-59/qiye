import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Routers from '@/routers'
import store from '@/store'
import '@/styles/reset.css'
import '@/styles/index.less'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Routers />
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);
