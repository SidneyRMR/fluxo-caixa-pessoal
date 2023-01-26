import { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import { Botoes } from './Botoes'
import BotaoModal from './BotaoModal'

import api from '../services/api'
import valores from '../valores'

export default function Tabela(props) {


// const [dadosCaixa, setDadosCaixa] = useState([])
// const getDadosCaixa = async () => {
//     try{
//         const res = await api.get("/dados-caixa")
//         setDadosCaixa(res.data.sort((a,b) => (a.dados > b.dados ? 1 : -1)))
//     } catch (error) {
//         console.error(error)
//     }
// }
// useEffect(() => {
//     getDadosCaixa()
// }, [setDadosCaixa])

  const filteredValores = valores
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <Table>
      <thead>
        <tr className='head-tabela'>
          <th>Dia</th>
          <th>Descrição</th>
          <th>Parcela</th>
          <th>E/S</th>
          <th>Obs.</th>
          <th>Saldo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {filteredValores.map((e, i) => (
          <tr key={i}>
            <td>{e.data}</td>
            <td>{e.descricao}</td>
            <td>{e.parcela}</td>
            <td>{e.entrada}</td>
            <td>{e.observacao}</td>
            
            <td>{
                  (e.entrada === 'number') && (e.entradas === 'number') ?
                  e.entrada + e.entradas :
                  ''
                }
            </td>
            <td>
              <BotaoModal funcao='edit'/>
              <Botoes funcao='quitar'></Botoes>
              <Botoes funcao='del'></Botoes>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
