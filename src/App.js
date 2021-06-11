import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home/Home'
import "./Layout_Component/FontAwesome/FontAweSome"
import { Route, Router, Switch } from 'react-router'
import "./App.scss"
// import history
import { createBrowserHistory } from "history"
import Login from './Layout_Component/Login/Login'
import SignUp from './Layout_Component/SignUp/SignUp'
import FilmDetail from './Layout_Component/FilmDetail/FilmDetail'
import DatVe from './Layout_Component/DatVe/DatVe'
import UserInfo from './Layout_Component/UserInfo/UserInfo'
import Loading from './Layout_Component/Loading/Loading'
import LoginAdmin from './pages/Admin/LoginAdmin'
import SignUpAdmin from './pages/Admin/SignUpAdmin'
import Admin from './pages/Admin/Admin'
// import AdminMagaFilm from './pages/Admin/AdminMagaFilm'/
export const history = createBrowserHistory()


function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* Home */}
        {/* Route */}
        <Switch>
          <Route exact path="/loading" component={Loading} />

          {/* update userinfo */}
          <Route exact path="/userinfo" component={UserInfo} />

          {/* Login -- SignUp */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          {/* filmDetail */}
          <Route exact path="/detail/:id" component={FilmDetail} />
          {/* Mua ve */}
          <Route exact path='/datve/:id' component={DatVe} />
          {/* admin */}
         
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/login_admin' component={LoginAdmin} />
          <Route exact path='/signup_admin' component={SignUpAdmin} />

          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
