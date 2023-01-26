import { useState } from "react";
import { Modal, Col, Row } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { Botoes } from "./Botoes";
import FuncaoSalva from "./Funcoes/FuncaoSalva";

export default function BotaoModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const [data, setData] = useState();
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [parcela, setParcela] = useState("");
  const [entrada, setEntrada] = useState();
  const [quitado, setQuitado] = useState();
  const [observacao, setObservacao] = useState();

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
  // function handleSelectChange(changeEvent) {
  //   setSelectedSelect(changeEvent.target.value);
  // }
  return (
    <>
      {props.funcao === "edit" && (
        <button className="btn btnFuncoes" onClick={openModal}>
          <AiFillEdit />
        </button>
      )}
      {props.funcao === "add" && (
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
                  <label htmlFor="description" className=" d-flex justify-content-between">
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
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label htmlFor="valor" className=" d-flex justify-content-between">
                    Valor{" "}
                    <span className="valInvalido">
                      {!valor ? "Digite um valor." : ""}
                    </span>
                  </label>
                  <input
                    type="number"
                    className="form-control valor"
                    placeholder="Ex. Salário"
                    onChange={handleInputValor}
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
                    defaultValue={new Date().toISOString().slice(0, 10)}
                    onChange={handleInputData}
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
                    defaultValue={1}
                    onChange={handleInputParcela}
                  />
                </div>
              </Col>
            </Row>

            <div className="form-group ">
              <label htmlFor="tipo">Entrada / Saída</label>
              <select
                className="form-control entrada"
                onChange={handleInputEntrada}
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
              />
            </div>
            <div className="form-group">
              {
                props.funcao && (
                  <FuncaoSalva
                  novo="sim"
                  descricao={descricao}
                  valor={valor}
                  data={data}
                  parcela={parcela}
                  entrada={entrada}
                  quitado={quitado}
                  observacao={observacao}
                  />
                  ) // entrada nova uso post
                }
                <Botoes funcao="del"></Botoes>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
