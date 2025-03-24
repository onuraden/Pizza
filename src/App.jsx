import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/Home'
import OrderPizza from './components/OrderPizza'
import Success from './components/Success'

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orderpizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  )
}

export default App
