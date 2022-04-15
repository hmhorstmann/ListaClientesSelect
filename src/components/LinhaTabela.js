import React from "react"
import axios from "axios"

const LinhaTabela = ({ infoState, setInfoState }) => {


    React.useEffect((infoState) => {
        async function getInfos(infoState) {
            const requestData = await axios.get('https://jsonplaceholder.typicode.com/users/')
            setInfoState(requestData.data)
        }
        getInfos(infoState)
    }, [])


    return (
        <>
            {infoState.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
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