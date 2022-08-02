import { Route, Routes, Link } from 'react-router-dom'
import ComponenteHookUseEffect from './components/ComponenteHookUseEffect'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link> <br/>
      <Link to='/rick-morty'>Rick And Morty</Link>
      <hr/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/rick-morty' element={<ComponenteHookUseEffect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
