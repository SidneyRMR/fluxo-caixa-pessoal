export default function FuncaoNovo(props) {
    
    const verificaValores = () => {
        if(props.data || props.descricao || props.valor) {
            return lancarNovo()
        }
        return alert('Todos os valores devem estar preenchidos');
    }

    const lancarNovo = () => {
        alert('Movimentação Lancada com sucesso!')
    }
    return (
        <button className="btnSalva" onClick={() =>
            verificaValores()
        }>
            Salvar
        </button>
    )
}