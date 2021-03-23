import { Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <div id="main">
          <Header/>

          <Switch>
            <Router/>
          </Switch>

          <Footer/>
      </div>   
    </div>
  );
}

export default App;
