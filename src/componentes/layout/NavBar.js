import {Link} from 'react-router-dom'
import estilo from './NavBar.module.css'
import LogoPb from '../../img/LogoPb.png'

function Navbar(){
return (
    <nav className={estilo.navega}>
      
       
       
       <ul className={estilo.lista} >

            <li><img className={estilo.logoPb} src={LogoPb} alt='logoPretoBranco'/></li>
            <li><Link className={estilo.itemLista} to="/">Home</Link></li>

            <li><Link className={estilo.itemLista} to="/Avaliacao">Avaliacao</Link></li>
            
           

            

        </ul>

   
    </nav>
)
}

export default Navbar