import { useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import FuncoesBotoes from "./Funcoes/FuncoesBotoes";

export default function BotaoModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const [id, setId] = useState(props.obj ? props.obj.id : "");
  const [data, setData] = useState(props.obj ? props.obj.data : "");
  const [descricao, setDescricao] = useState(
    props.obj ? props.obj.descricao : ""
  );
  const [valor, setValor] = useState(props.obj ? props.obj.valor : "");
  const [parcela, setParcela] = useState(props.obj ? props.obj.parcela : "");
  const [entrada, setEntrada] = useState(props.obj ? props.obj.entrada : "");
  const [quitado, setQuitado] = useState(props.obj ? props.obj.quitado : "");
  const [observacao, setObservacao] = useState(
    props.obj ? props.obj.observacao : ""
  );

  function handleInputData(event) {
    setData(0);
    setData(event.target.value);
  }
  function handleInputDescricao(event) {
    setDescricao(0);
    setDescricao(event.target.value);
  }
  function handleInputValor(event) {
    setValor(0);
    setValor(event.target.value);
  }
  function handleInputParcela(event) {
    setParcela(0);
    setParcela(event.target.value);
  }
  function handleInputEntrada(event) {
    setEntrada(0);
    setEntrada(event.target.value);
  }
  function handleInputQuitado(event) {
    setQuitado(0);
    setQuitado(event.target.value);
  }
  function handleInputObservacao(event) {
    setObservacao(0);
    setObservacao(event.target.value);
  }

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
      >
        <Modal.Header closeButton className="title">
          <Modal.Title className="title">Novo Lançamento</Modal.Title>
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
                    Descrição{" "}
                    <span className="valInvalido">
                      {!descricao ? "Digite a descrição." : ""}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control descricao"
                    placeholder="Ex. Salário"
                    maxLength={50}
                    onChange={handleInputDescricao}
                    value={descricao}
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
                    className="form-control valor"
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
                    value={new Date().toISOString().slice(0, 10) || data}
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="installments">Parcela</label>
                  <input
                    type="number"
                    className="form-control parcela"
                    placeholder="1"
                    // defaultValue={1}
                    onChange={handleInputParcela}
                    value={parcela || 1}
                  />
                </div>
              </Col>
            </Row>

            <div className="form-group ">
              <label htmlFor="tipo">Entrada / Saída</label>
              <select
                className="form-control entrada"
                onChange={handleInputEntrada}
                value={entrada}
              >
                <option value="0">Saída</option>
                <option value="1">Entrada</option>
              </select>
            </div>

            <div className="form-group ">
              <label htmlFor="tipo">Já esta pago?</label>
              <select
                className="form-control quitado"
                onChange={handleInputQuitado}
                value={quitado}
              >
                <option value="0">Não</option>
                <option value="1">Sim</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nome">Observação</label>
              <input
                type="text"
                className="form-control"
                placeholder="Informações adicionais"
                onChange={handleInputObservacao}
                value={observacao}
              />
            </div>
            <div className="form-group">
              {id ? (
                <FuncoesBotoes
                  funcao="editar"
                  descricao={descricao}
                  valor={valor}
                  data={data}
                  parcela={parcela}
                  entrada={entrada}
                  quitado={quitado}
                  observacao={observacao}
                />
              ) : (
                <FuncoesBotoes
                  funcao="salvar"
                  descricao={descricao}
                  valor={valor}
                  data={data}
                  parcela={parcela}
                  entrada={entrada}
                  quitado={quitado}
                  observacao={observacao}
                />
              )}
             
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
