import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'

/**
 * Pages
 */
import { PageHome } from './pages/Home'

/**
 * utils
 */
import './index.css'
import { Store } from './store'

const store = new Store()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <PageHome />
    </div>
  </Provider>,
  document.getElementById('root')
)
