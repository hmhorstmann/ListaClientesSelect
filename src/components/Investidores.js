import React from 'react'
import LinhaTabela from './LinhaTabela'

const Investidores = ({ infoState, setInfoState, originalState, setOriginalState }) => {

    const [searchState, setSearchState] = React.useState("")
    const [selectState, setSelectState] = React.useState("Nome")

    function submitSearch(e) {
        e.preventDefault()
        setInfoState(searchTable())
    }

    function handleInput(e) {
        const inputValue = e.target.value
        setSearchState(inputValue)
    }

    function handleSelect(e) {
        const selectValue = e.target.value
        setSelectState(selectValue)
    }

    function searchTable() {
        const filteredData = []

        if (searchState.length === 0) {
            return originalState
        }

        originalState.forEach((item) => {
            const newValue = searchState.toLowerCase()

            if (selectState === "business") {
                const investidor = item.company.bs.toLowerCase()
                if (investidor.includes(newValue)) {
                    filteredData.push(item)
                }
            } else {
                const investidor = item.name.toLowerCase()
                if (investidor.includes(newValue)) {
                    filteredData.push(item)
                }
            }
        })
        return filteredData
    }

    return (
        <>
            <h1>Lista de Investidores</h1>
            <form className="d-flex flex-row mb-3">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchState} onChange={handleInput} />
                <select className="form-select me-2" aria-label="Default select example" value={selectState} onChange={handleSelect} >
                    <option defautvalue="name">Nome</option>
                    <option value="business">Business</option>
                </select>
                <button className="btn btn-outline-success" type="submit" onClick={submitSearch}>Search</button>
            </form>
            <div className="table-responsive-lg">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LinhaTabela infoState={infoState} setInfoState={setInfoState} setOriginalState={setOriginalState} />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Investidores