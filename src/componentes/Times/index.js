import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) =>{

   const css = { backgroundColor: props.corPrimario}

    return(
        {/*é assim que se faz uma comparação no JSX */},
        (props.colaboradores.length) > 0 ?

            <section className="time"  style={css}> {/*Isso é um objeto javascript que recebe uma propriedade */}
            <h3 style={{borderColor: props.corSecundaria}} >{props.nome}</h3> {/*Recebe um parâmetro */}
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                 <Colaborador 
                    corDeFundo ={props.corSecundaria}
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                 />)}
            </div>
            
        </section>

        :''
    )
}

export default Times