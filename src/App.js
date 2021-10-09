import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Shop from './pages/Shop';
import Navigation from './components/Navigation';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/about"}>
        <About />
      </Route>
      <Route path={"/shop"}>
        <Shop />
      </Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
