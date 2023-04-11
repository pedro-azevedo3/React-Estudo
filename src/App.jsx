import {BrowserRouter as Router, Switch , Route , Link} from 'react-router-dom';
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'

function App() {
<div>

</div>
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><Home/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/empresa"><Empresa/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/contato"><Contato/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
