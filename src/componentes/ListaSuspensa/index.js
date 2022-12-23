import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    //console.log(props.itens)

    return(
        <div className="lista_suspensa" >
            <label>{props.label}</label>{/*Recebe um nome de forma dinâmica */}
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required}  value={props.valor}>{/*Como no html se utiliza o option para fazer uma lista*/}
            <option value=""></option>      
                    
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                
            </select>
        </div>
        
    )
}

export default ListaSuspensa