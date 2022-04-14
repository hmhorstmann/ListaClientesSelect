import home from '../img/home.jpg'
import quemsomos from '../img/quemsomos.jpg'
import negocios from '../img/negocios.jpg'
import escritorio from '../img/escritorio.jpg'
import noticias from '../img/noticias.jpg'
import contato from '../img/contato.jpg'
import cliente from '../img/cliente.jpg'



const Outras = ({ imagem }) => {

    const maxWidth = document.body.clientWidth;
    let render

    switch (imagem) {
        case "quemsomos":
            render = quemsomos
            break;
        case "negocios":
            render = negocios
            break;
        case "escritorio":
            render = escritorio
            break;
        case "noticias":
            render = noticias
            break;
        case "contato":
            render = contato
            break;
        case "cliente":
            render = cliente
            break;
        default:
            render = home
    }

    return (
        <>
            <figure className="figure business">
                <img src={render} width={maxWidth} className="figure-img img-fluid" alt="" />
            </figure>
        </>
    )
}

export default Outras