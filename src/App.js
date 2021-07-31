import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home";

function App() {
  return (
   
    <main>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </main>
    
    )
}

export default App;
