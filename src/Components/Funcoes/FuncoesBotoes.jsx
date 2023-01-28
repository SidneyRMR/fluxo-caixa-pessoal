import { api } from "../../services/api";
import { BsCheckLg, BsFillTrashFill } from "react-icons/bs";

export default function FuncaoBotoes(props) {

  const salvar = async () => {
    // const id = props.id;
    const descricao = props.obj.descricao;
    const valor = props.obj.valor;
    const data = props.obj.data;
    const parcela = props.obj.parcela;
    const entrada = props.obj.entrada;
    const quitado = props.obj.quitado;
    const observacao = props.obj.observacao;
    console.log(
    `Descricao: ${descricao}, 
    Valor: ${descricao}, 
    Data: ${data.slice(0,-14)}, 
    Parcela: ${parcela}, 
    Entrada: ${entrada}, 
    Quitado: ${quitado}, 
    Observacao: ${observacao}`
    )
    try {
      const res = await api.post("/dados-caixa", {
        data,
        descricao,
        valor,
        parcela,
        entrada,
        quitado,
        observacao,
      });
      console.log(`Salvo com sucesso.`);
    } catch (error) {
      console.error(error);
    }
  }

  const quitar = async () => {
    const id = props.obj.id;
    const descricao = props.obj.descricao;
    const valor = props.obj.valor;
    const data = props.obj.data;
    const parcela = props.obj.parcela;
    const entrada = props.obj.entrada;
    const quitado = 1
    const observacao = props.obj.observacao;
    console.log(
      `Descricao: ${descricao}, 
      Valor: ${descricao}, 
      Data: ${data.slice(0,-14)}, 
      Parcela: ${parcela}, 
      Entrada: ${entrada}, 
      Quitado: ${quitado}, 
      Observacao: ${observacao}`
      )
    try {
      const res = await api.put(`/dados-caixa/${id}`, {
        id,
        descricao,
        valor,
        data,
        parcela,
        entrada,
        quitado,
        observacao,
      });
      console.log(`Quitado com sucesso.`);
    } catch (error) {
      console.error(error);
    }
  }
  
  const editar = async () => {
    const id = props.obj.id;
    const descricao = props.obj.descricao;
    const valor = props.obj.valor;
    const data = props.obj.data
    const parcela = props.obj.parcela;
    const entrada = props.obj.entrada;
    const quitado = 1
    const observacao = props.obj.observacao;
    console.log(
      `Descricao: ${descricao}, 
      Valor: ${descricao}, 
      Data: ${data.slice(0,-14)}, 
      Parcela: ${parcela}, 
      Entrada: ${entrada}, 
      Quitado: ${quitado}, 
      Observacao: ${observacao}`
      )
    try {
      const res = await api.put(`/dados-caixa/${id}`, {
        id,
        descricao,
        valor,
        data,
        parcela,
        entrada,
        quitado,
        observacao,
      });
      console.log(`Editado com sucesso.`);
    } catch (error) {
      console.error(error);
    }
  }

  const deletar = async (ident) => {
    try {
      const res = await api.delete(`/dados-caixa/${ident}`);
      console.log(`Exclusão do lançamento ${ident} realizada com sucesso`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {props.funcao === "salvar" && (
        <button className="btnSalva" onClick={() => salvar()}>
          Salvar
        </button>
      )}

      {props.funcao === "editar" && (
        <button className="btnSalva" onClick={() => editar()}>
          Salvar
        </button>
      )}

      {props.funcao === "quitar" && (
        <button className="btn btnFuncoes" onClick={() => quitar()}>
          {<BsCheckLg />}
        </button>
      )}

      {props.funcao === "delelar" && (
        <button className="btn btnDel" onClick={() => deletar(props.id)}>
          {<BsFillTrashFill />}
        </button>
      )}
    </>
  );
}
