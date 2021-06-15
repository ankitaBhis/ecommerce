import logo from './logo.svg';
import Header from './components/Header'
import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
