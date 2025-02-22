import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'

import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
