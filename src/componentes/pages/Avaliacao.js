import estilo from './Avaliacao.module.css'
import {Link} from 'react-router-dom'
function Avaliacao(){
    return(    
        
            <div className={estilo.boxBtn}>
                <Link className={estilo.limpaLink} to='/FormAvaliacao'><spam className={estilo.btnAvaliacao}>Aluno já cadastrado</spam></Link>
                <Link className={estilo.limpaLink} to='/FormCadastro'><spam className={estilo.btnAvaliacao}>Aluno não cadastrado</spam></Link>
            </div>
  
        )
    }
    
 export default Avaliacao
