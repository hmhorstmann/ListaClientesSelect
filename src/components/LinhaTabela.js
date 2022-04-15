import React from "react"
import axios from "axios"

const LinhaTabela = ({ infoState, setInfoState }) => {

    React.useEffect(() => {
        getInfos('users/')
    }, [])

    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/"
    })

    async function getInfos(usuarios) {
        const { data } = await api
            .get(usuarios)

        setInfoState(prevState => ({
            ...prevState,
            infos: data
        }))
    }



    return (
        <>
            {infoState.infos.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>{/* no futuro pegar esses dados do json lá*/}
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address.city}</td>
                    <td>{item.company.name}</td>
                </tr>
            ))}
        </>
    )
}

export default LinhaTabela