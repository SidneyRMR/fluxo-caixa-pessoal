import { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import BotaoModal from './BotaoModal'
import FuncaoBotoes from './Funcoes/FuncoesBotoes'
import {api} from '../services/api'

export default function Tabela() {
const [somatoriaEntradas, setSomatoriaEntradas] = useState(0)
const [dadosCaixa, setDadosCaixa] = useState([])
const getDadosCaixa = async () => {
    try{
        const res = await api.get("/dados-caixa")
        setDadosCaixa(res.data.sort((a,b) => (a.dados > b.dados ? 1 : -1)))
    } catch (error) {
        console.error(error)
    }
}
useEffect(() => {
    getDadosCaixa()
}, [setDadosCaixa])

useEffect(() => {
  let soma = 0;
  dadosCaixa.forEach(e => {
    soma += e.entrada
  });
  setSomatoriaEntradas(soma);
}, [dadosCaixa]);

  return (
    <Table bordered>
      <thead>
        <tr className='head-tabela'>
          <th>Dia <br />
              Descrição</th>
          <th>Parcela <br /> 
              E/S</th>
          <th>Obs.</th>
          <th>Saldo</th>
          <th width='10%'>Ações</th>
        </tr>
      </thead>
      <tbody className='body-tabela'>
      {dadosCaixa &&
          dadosCaixa.map((e, i) => (
            <tr key={i} className={e.quitado ? 'linhaQuitado' : ''}>
              <td>
                {e.data.slice(0,-14)} <br />
                {e.descricao}
              </td>
              <td>
                {e.entrada}<br />
                {e.parcela} 
              </td>
              <td>{e.observacao}</td>
              <td>{somatoriaEntradas}</td>
              <td>
                <BotaoModal className='btnTabela' funcao='editModal' id={e.id} obj={e} />
                <FuncaoBotoes className='btnTabela' funcao='quitar' id={e.id} obj={e}/>
                <FuncaoBotoes className='btnTabela' funcao="deletar" id={e.id} obj={e}/>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
