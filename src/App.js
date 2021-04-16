import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './LoginComponent/Login';
import Reg from './RegComponent/Reg';
import Addjobs from './Addjobs';
import Showjobs from './Showjobs';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import EditUser from './EditUser';
import View from './View';
import Login1 from './LoginComponent1/Login1';
import Reg1 from './RegComponent1/Reg1';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import 'animate.css';
import infoProvider from './RegComponent/RegValidation';
import RegValidation from './RegComponent/RegValidation';

function App() {
  return (
    <div className="App">
      {/* <Login1 />
      <Reg1 />   */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ReactNotification />
            <Login1 />
          </Route>
          <Route exact path="/reg">
            <RegValidation>
              <Reg />
            </RegValidation>
          </Route>
          <Route exact path="/Addjobs/:cid" component={Addjobs} />
          <Route exact path="/showlist/:id" component={Showjobs} />
          <Route exact path="/showlist/EditUser/:id" component={EditUser} />
          <Route exact path="/showlist/ViewUser/:id" component={View} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
