import logo from './logo.png';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
          <div className="container">        
                      <div className="row">        
                            <div className="col-md-4 pt-2">        
                              <img src={logo} className="App-logo" alt="logo" />
                            </div>

                          <div className="col-md-7 pt-2">        
                              <NavBar />
                            </div>
                      </div>
                      <ItemListContainer mensaje = "Productos sublimados" />

          </div>
    </div>
  );
}

export default App;
