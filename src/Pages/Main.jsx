import BotaoModal from "../Components/BotaoModal"
import Tituto from "../Components/Titulo"
import Tabela from "../Components/Tabela"

export default function Principal() {
    
// função get 


    return (
        <>
            <Tituto title='Fluxo de caixa pessoal'/>
            <Tabela/>
            <BotaoModal funcao='addModal'/>
        </>
    )
}