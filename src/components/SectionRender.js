import Investidores from './Investidores'
import Outras from './Outras'

const SectionRender = ({ page }) => {

    let pageRender
    if (page !== "investidores") {
        pageRender = <Outras imagem={page} />
    } else {
        pageRender = <Investidores />
    }

    return (
        <section>
            {pageRender}
        </section>
    )
}

export default SectionRender