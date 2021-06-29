import logo from './logo.svg';
import Header from './components/Header'
import Login from './components/Login'
import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import ProductDetail from './components/ProductDetails';
import RegisterForm from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
