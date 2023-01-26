import { BsCheckLg, BsFillTrashFill } from "react-icons/bs";

export const Botoes = (props) => {
  
  const quitar = () => {};
  const del = () => {};
  return (
    <>

      {props.funcao === "quitar" && (
        <button className="btn btnFuncoes" onClick={quitar(props.id)}>
          {<BsCheckLg />}
        </button>
      )}
      {props.funcao === "del" && (
        <button className="btn btnFuncoes" onClick={del(props.id)}>
          {<BsFillTrashFill />}
        </button>
      )}
    </>
  );
};
