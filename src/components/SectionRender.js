import Investidores from './Investidores'
import Outras from './Outras'

const SectionRender = ({ page, infoState, setInfoState }) => {

    let pageRender
    if (page !== "investidores") {
        pageRender = <Outras imagem={page} />
    } else {
        pageRender = <Investidores infoState={infoState} setInfoState={setInfoState} />
    }

    return (
        <section>
            {pageRender}
        </section>
    )
}

export default SectionRender