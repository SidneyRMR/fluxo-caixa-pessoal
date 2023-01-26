import {React, useEffect, useState} from "react";
import {Table, Button} from "react-bootstrap";
import valores from "./valores";
import "./App.css";
import { api } from "./services/api";

function App() {

// função get 
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

  const filteredValores = valores
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="App">
      <div className="title">Fluxo de caixa pessoal</div>
      <Table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Descrição</th>
            <th>Parcela</th>
            <th>E/S</th>
            <th>Saldo</th>
            <th>Ações</th>
            <th>Obs.</th>
          </tr>
        </thead>
        <tbody>
        {filteredValores.map((entry, i) => (
            <tr key={i}>
              <td>{entry.date}</td>
              <td>{entry.description}</td>
              <td>{entry.price}</td>
              <td>{entry.type}</td>
              <td>{entry.balance}</td>
              <td>
                <Button>Alterar</Button>
                <Button >Quitar</Button>
              </td>
              <td>{entry.note}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
