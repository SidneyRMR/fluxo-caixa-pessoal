import { BsCheckLg, BsFillTrashFill } from "react-icons/bs";

export const Botoes = (props) => {
  
  const quitar = () => {alert("Quitado com sucesso.")};
  const del = () => {alert('deletado com sucesso.')};
  return (
    <>

      {props.funcao === "quitar" && (
        <button className="btn btnFuncoes" onClick={quitar(props.id)}>
          {<BsCheckLg />}
        </button>
      )}
      {props.funcao === "del" && (
        <button className="btn btnDel" onClick={del(props.id)}>
          {<BsFillTrashFill />}
        </button>
      )}
    </>
  );
};
