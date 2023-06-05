import './App.css';
import MoviesList from './MoviesList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';
function App() {

    return (
      <div className="App">
        <MovieProvider>
          <Nav/>
          <AddMovie/>
          <MoviesList/>
        </MovieProvider>
      </div>
    );

}

export default App;