import './Colaborador.css';

const Colaborador = ({nome, imagem, cargo, corDeFundo}) =>{//esse é o processo de desestruturação que pode substituir as props
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}


export default Colaborador
