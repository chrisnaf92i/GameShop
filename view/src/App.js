import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chris Game Shop</h1>

        <nav>
          <Link to="/acceuil"><h2>Acceuil</h2></Link>
          <Link to="/categorie"><h2>Catégorie</h2></Link>
          <Link to="/pannier"><h2>Pannier</h2></Link>
          <Link to="/commander"><h2>Commander</h2></Link>
        </nav>
      </header>

      
    </div>
  );
}

export default App;
