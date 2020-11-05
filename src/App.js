import logo from './logo.svg';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div> 
      <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="/#" className="header item">
                  Ujicha 
                </a>
            </div>
      </div>
      <div className="ui main container">
          <Login /> 
      </div>
    </div>
    
   
  );
}

export default App;
