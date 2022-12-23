import {useState} from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Times from './componentes/Times';


function App() {
  //criação de estado

  const times = [
    {
      nome: 'Progamação',
      corPrimario: '#d9f7e9',
      corSecundaria: '#57c278',
    },
    {
      nome: 'Front-End',
      corPrimario: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'Data-science',
      corPrimario: '#F0F8E2',
      corSecundaria: '#A6D157',
    },
    {
      nome: 'Devops',
      corPrimario: '#FDE7E8',
      corSecundaria: '#E06B69',
    },
    {
      nome: 'Ux e Design',
      corPrimario: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      corPrimario: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimario: '#FFEEDF',
      corSecundaria: '#FF8A29',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    debugger
    setColaboradores([...colaboradores, colaborador])// três pontinhos significa o operador spreed
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario 
          times={times.map(time => time.nome)} 
          aoColaboradorCadastrado={colaborador => 
          aoNovoColaboradorAdicionado(colaborador)} 
      />

      {times.map(time =>
        <Times 
          key={time.nome} 
          nome={time.nome} 
          corPrimario={time.corPrimario} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

        <Rodape/>
      
    </div>
  );
}

export default App;
