import { api } from "../../services/api";
import { BsCheckLg, BsFillTrashFill } from "react-icons/bs";

export default function FuncaoBotoes(props) {
  const verificaValores = () => {
    const { data, descricao, valor, parcela, entrada, quitado, observacao } =
      props.obj;
    if (parcela < 1) {
      return (
        <div className="alert alert-danger" role="alert">
          <strong>Erro!</strong> Valor da parcela deve ser maior que 0
        </div>
      );
    } else {
      if (props.funcao === "salvar") {
        console.log(
          "salvar",
          data,
          descricao,
          valor,
          parcela,
          entrada,
          quitado,
          observacao
        );
        salvar(data, descricao, valor, parcela, entrada, quitado, observacao);
      } else if (props.funcao === "editar") {
        const id = props.obj.id;
        console.log(
          "editar",
          id,
          data,
          descricao,
          valor,
          parcela,
          entrada,
          quitado,
          observacao
        );
        editar(
          id,
          data,
          descricao,
          valor,
          parcela,
          entrada,
          quitado,
          observacao
        );
      } else if (props.funcao === "quitar") {
        const id = props.obj.id;
        console.log(
          "quitar",
          id,
          data,
          descricao,
          valor,
          parcela,
          entrada,
          quitado,
          observacao
        );
        editar(
          id,
          data,
          descricao,
          valor,
          parcela,
          entrada,
          quitado,
          observacao
        );
      } else if (props.funcao === "deletar") {
        const id = props.id;
        // console.log(id, data, descricao, valor, parcela, entrada, quitado, observacao)
        deletar(id);
      } else if (!props.funcao) {
        console.log("Função inválida.");
      }
    }
  };

  const salvar = async (
    data,
    descricao,
    valor,
    parcela,
    entrada,
    quitado,
    observacao
  ) => {
    try {
      for (let i = 0; i < parcela; i++) {
        const novaData = new Date(data);
        novaData.setMonth(novaData.getMonth() + i);
  
        const dataFormatada = `${novaData.getFullYear()}-${novaData.getMonth() + 1}-${novaData.getDate()}`;
  
        await api.post("/dados-caixa", {
          data: dataFormatada,
          descricao,
          valor,
          parcela,
          entrada,
          quitado,
          observacao,
        });
      }
      props.renderizaAlter();
      props.fechaModal();
      console.log("Salvo com sucesso.");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao salvar. Tente novamente.");
    }
  };
  

  const editar = async (
    id,
    data,
    descricao,
    valor,
    parcela,
    entrada,
    quitado,
    observacao
  ) => {
    // if (window.confirm("Tem certeza que deseja quitar a conta?")) {
    console.log("antes", quitado);
    if (props.funcao === "quitar") {
      quitado = quitado === 1 ? 0 : 1;
      data = data.slice(0, -14);
    }
    console.log("depois", quitado);

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
      props.renderizaAlter();
      if (props.funcao === "salvar") {
        props.fechaModal();
      }
      console.log("Editado com sucesso.", res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao salvar. Tente novamente.");
    }
    // }
  };

  const deletar = async () => {
    try {
      const res = await api.delete(`/dados-caixa/${props.id}`);
      props.renderizaAlter();
      console.log(
        `Exclusão do lançamento ${props.obj.descricao} realizada com sucesso`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao deletar. Tente novamente.");
    }
  };

  return (
    <>
      {props.funcao === "salvar" && (
        <div className="btn btnSalva" onClick={() => verificaValores()}>
          Salvar novo
        </div>
      )}

      {props.funcao === "editar" && (
        <div className="btn btnSalva" onClick={() => verificaValores()}>
          Salvar edição
        </div>
      )}

      {props.funcao === "quitar" && (
        <div className="btn btnFuncoes" onClick={() => verificaValores()}>
          {<BsCheckLg />}
        </div>
      )}

      {props.funcao === "deletar" && (
        <div className="btn btnFuncoes" onClick={() => verificaValores()}>
          {<BsFillTrashFill />}
        </div>
      )}
    </>
  );
}
