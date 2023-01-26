export default function FuncaoNovo(props) {
    
    const verificaValores = () => {
        if(props.data || props.descricao || props.valor) {
            return verificaNovo()
        }
        return alert('Todos os valores devem estar preenchidos');
    }

    const verificaNovo = () => {
        props.novo === 'sim' ? novoCadastro() : salvaEntrada()
    }

    const novoCadastro = () => {
    }
    
    const salvaEntrada = () => {
    }


    return (
        <button className="btnSalva" onClick={() =>
            verificaValores()
        }>
            Salvar
        </button>
    )
}