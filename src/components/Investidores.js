const Investidores = () => {
    return (
        <section className="teste">
            <h1>Lista de Investidores</h1>
            <form className="d-flex flex-row-reverse mb-3">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Leanne Graham</td>
                        <td>Sincere@april.biz</td>
                        <td>1-770-736-8031 x56442</td>
                        <td>Romaguera-Crona</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Investidores