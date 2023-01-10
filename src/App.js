import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './componentes/pages/Home';
import Avaliacao from './componentes/pages/Avaliacao';
import Navbar from './componentes/layout/NavBar';
import estilo from './componentes/layout/BoxPrincipal.module.css'
import FormAvaliacao from './componentes/pages/FormAvaliacao';
import FormCadastro from './componentes/pages/FormCadastro';

function App() {
  return (
    
    <Router>
  
      <Navbar />

    <div className={estilo.boxGeral}>
      
      <Routes>
     
      <Route  path ="/" 
      element={<Home />} exact/>  

      <Route path="/FormCadastro"
      element={<FormCadastro />}/>

      <Route path="/FormAvaliacao"
      element={<FormAvaliacao />}/>

      <Route path ="/Avaliacao"
         element={<Avaliacao />}/>
    
        </Routes>
    </div>

    </Router>
 
    
  );
}

export default App;