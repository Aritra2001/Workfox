
import './App.css';
import Background from './component/Background/Background';
import Meet from './component/Meet/Meet';
import Regform from './component/Regform/Regform';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './component/error/Error';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route 
        path='/'
        element={[<Background />, <Regform />]}
        />
        <Route
        path='/meeting'
        element={[<Background />, <Meet />]}
        />
        <Route
        path='*'
        element={[<Background />, <Error />]}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
