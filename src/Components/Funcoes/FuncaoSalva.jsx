import {api} from '../../services/api'

export default function FuncaoNovo(props) {

  const novo = "sim";
  const descricao = props.descricao
  const valor = props.valor
  const data = props.data 
  const parcela = props.parcela 
  const entrada = props.entrada 
  const quitado = props.quitado 
  const observacao = props.observacao 

  const verificaValores = () => {
    if (data || descricao || valor) {

      return verificaNovo();
    }
    return alert("Todos os valores devem estar preenchidos");
  };

  const verificaNovo = () => {
    novo === "sim" ? novoCadastro() : salvaEntrada();
  };

  const novoCadastro = () => {
    alert("novoCadastro");
  };

  const salvaEntrada = async () => {
    alert("novoEdição");
    try {
        const res = await api.post('/usuarios', {
            descricao,
            valor,
            data,
            parcela ,
            entrada ,
            quitado ,
            observacao,
        })
        console.log(`Lançamento no valor ${valor} salvo com sucesso`)
        
    } catch (error) {
        console.error(error)
    }
}
  

  return (
    <button className="btnSalva" onClick={() => verificaValores()}>
      Salvar
    </button>
  );
}
