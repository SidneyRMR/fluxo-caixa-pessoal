import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BotaoModal from "./BotaoModal";
import FuncaoBotoes from "./Funcoes/FuncoesBotoes";
import { api } from "../services/api";

export default function Tabela(props) {
  const [somatoriaEntradas, setSomatoriaEntradas] = useState(0);
  const [dadosCaixa, setDadosCaixa] = useState([]);

  const getDadosCaixa = async () => {
    try {
      const res = await api.get("/dados-caixa");
      setDadosCaixa(res.data.sort((a, b) => (a.dados > b.dados ? 1 : -1)));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDadosCaixa();
  }, [setDadosCaixa, props.renderizaAlter]);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const fechaModal = () => {
    props.setIsModalOpen(false);
  };

  function compareDates(a, b) {
    return new Date(a.data) - new Date(b.data);
  }
  const sortedData = dadosCaixa.sort(compareDates);

  return (
    <>
      <BotaoModal
        funcao="addModal"
        renderizaAlter={getDadosCaixa}
        fechaModal={fechaModal}
      />
      <Table bordered>
        <thead>
          <tr className="head-tabela">
            <th>Dia </th>
            <th>Descrição</th>
            <th>Parcelas</th>
            <th>E/S</th>
            {/* <th width="15%">Obs.</th> */}
            <th>Saldo</th>
            <th width="22%">Ações</th>
          </tr>
        </thead>
        <tbody className="body-tabela">
          {sortedData &&
            sortedData.map((e, i) => {
              // setSomatoriaEntradas(somatoriaEntradas + e.valor);
              let soma = +somatoriaEntradas + +e.valor
              return(
              <tr key={i} className={e.quitado ? "linhaQuitado" : ""}>
                <td width='10%'>{e.data ? e.data.slice(0, -14) : "Não encontrada"}</td>
                <td>{e.descricao}</td>  
                <td width='5%'>{e.parcela}</td>
                <td className={e.entrada ? 'entrada': 'saida'}>{e.valor ? e.valor.toFixed(2) : ''}</td>
                {/* <td>{e.observacao}</td> */}
                <td className={soma > 0 ? 'entrada': 'saida'}>{soma ? soma.toFixed(2): ''}</td>
                <td>
                  <BotaoModal
                    funcao="editModal"
                    id={e.id}
                    obj={e}
                    renderizaAlter={getDadosCaixa}
                    fechaModal={fechaModal}
                  />
                  <FuncaoBotoes
                    funcao="quitar"
                    id={e.id}
                    obj={e}
                    renderizaAlter={getDadosCaixa}
                  />
                  <FuncaoBotoes
                    funcao="deletar"
                    id={e.id}
                    obj={e}
                    renderizaAlter={getDadosCaixa}
                  />
                </td>
              </tr>
            )})}
        </tbody>
      </Table>
    </>
  );
}
