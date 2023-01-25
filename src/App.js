import './style.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home} from './Components/Home/index'
import {Card} from './Components/Card/index'


function App() {

  return (
    
<div>
  <nav class="nav-bar">        
    <ul class="flex-nav-bar-ul">
      <li><a href="/">Home</a></li>
      <li><a href="Card">Quem Somos</a></li>
      <li><a href="#areas">Áreas de Atuação</a></li>
      <li><a href="#contato">Contato</a></li>
      <li><a href="http://preambulo.com.br/cpj-3c/">CPJ</a></li>
    </ul>
  </nav> 
  


<BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/Card' element={<Card/>}/>
      
    </Routes>
  </BrowserRouter>





</div>

   
    
  );
}

export default App;
