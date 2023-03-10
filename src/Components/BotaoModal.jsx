import { useRef, useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import FuncaoBotoes from "./Funcoes/FuncoesBotoes";

export default function BotaoModal(props) {

  const valorInput = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = (props.obj ? props.obj.id : "")
  const [data, setData] = useState()
  const [descricao, setDescricao] = useState()
  const [valor, setValor] = useState()
  const [parcela, setParcela] = useState()
  const [entrada, setEntrada] = useState()
  const [quitado, setQuitado] = useState()
  const [observacao, setObservacao] = useState()
  
  const openModal = () => {
    setIsModalOpen(true);
    setData(props.obj.data ? props.obj.data.slice(0,-14) : dataAtual().slice(0,-14))
    setDescricao(props.obj ? props.obj.descricao : "")
    setValor(props.obj ? props.obj.valor : "")
    setParcela(props.obj ? props.obj.parcela : 1)
    setEntrada(props.obj ? props.obj.entrada : 0)
    setQuitado(props.obj ? props.obj.quitado : 0)
    setObservacao(props.obj ? props.obj.observacao : "")
  };
  const fechaModal = () => {
    setIsModalOpen(false);
    setData('')
    setDescricao('')
    setValor('')
    setParcela('')
    setEntrada('')
    setQuitado('')
    setObservacao('')
  };

  function handleInputData(event) {

    console.log(event.target.value)
    setData(event.target.value);
  }
  function handleInputDescricao(event) {
    console.log(event.target.value)
    setDescricao(event.target.value);
  }
  function handleInputValor(event) {
    console.log(event.target.value)
    setValor(event.target.value);
  }
  function handleInputParcela(event) {
    console.log(event.target.value)
    setParcela(event.target.value);
  }
  function handleInputEntrada(event) {
    console.log(event.target.value)
    setEntrada(event.target.value);
  }
  function handleInputQuitado(event) {
    console.log(event.target.value)
    setQuitado(event.target.value);
  }
  function handleInputObservacao(event) {
    console.log(event.target.value)
    setObservacao(event.target.value);
  }

  const dataAtual = () => {
    // Obt??m a data atual
    let dataAtual = new Date().toISOString();
    return `${dataAtual.toString()}`;
  };

  return (
    <>
      {props.funcao === "editModal" && (
        <button className="btn btnFuncoes" onClick={openModal}>
          <AiFillEdit />
        </button>
      )}
      {props.funcao === "addModal" && (
        <button className="btn btnAdd" onClick={openModal}>
          +
        </button>
      )}

      <Modal
        show={isModalOpen}
        onHide={() => {
          setIsModalOpen(false);
        }}
        onEntered={() => valorInput.current.focus()}
      >
        <Modal.Header closeButton className="title">
          <Modal.Title className="title">Novo Lan??amento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <Row>
              <Col>
                <div className="form-group">
                  <label
                    htmlFor="description"
                    className=" d-flex justify-content-between"
                  >
                    Descri????o{" "}
                    <span className="valInvalido">
                      {!descricao ? "Digite a descri????o." : ""}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex. Sal??rio"
                    maxLength={50}
                    onChange={handleInputDescricao}
                    value={descricao}
                    ref={valorInput}
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label
                    htmlFor="valor"
                    className=" d-flex justify-content-between"
                  >
                    Valor{" "}
                    <span className="valInvalido">
                      {!valor ? "Digite um valor." : ""}
                    </span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ex. 1000"
                    onChange={handleInputValor}
                    value={valor}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label htmlFor="date">Data</label>
                  <input
                    type="date"
                    className="form-control data"
                    onChange={handleInputData}
                    value={data || dataAtual()}
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="installments">Parcela</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1"
                    onChange={handleInputParcela}
                    value={parcela}
                  />
                </div>
              </Col>
            </Row>

            <div className="form-group ">
              <label htmlFor="tipo">Entrada / Sa??da</label>
              <select
                className="form-control"
                onChange={handleInputEntrada}
                value={entrada}
              >
                <option className="saida" value={0}>Sa??da</option>
                <option className="entrada" value={1}>Entrada</option>
              </select>
            </div>

            <div className="form-group ">
              <label htmlFor="tipo">J?? esta pago?</label>
              <select
                className="form-control"
                onChange={handleInputQuitado}
                value={quitado}
              >
                <option value={0}>N??o</option>
                <option value={1}>Sim</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nome">Observa????o</label>
              <input
                type="text"
                className="form-control"
                placeholder="Informa????es adicionais"
                onChange={handleInputObservacao}
                value={observacao}
              />
            </div>
            <div className="form-group">
              {id ? (
                <FuncaoBotoes
                  funcao="editar"
                  obj={{id, descricao, valor, data, parcela, entrada, quitado, observacao}}
                  fechaModal={fechaModal}
                  renderizaAlter={props.renderizaAlter}
                />
              ) : ( 
                <FuncaoBotoes
                  funcao="salvar"
                  obj={{descricao, valor, data, parcela, entrada, quitado, observacao}}
                  fechaModal={fechaModal}
                  renderizaAlter={props.renderizaAlter}
              
                />
              )}
             
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
