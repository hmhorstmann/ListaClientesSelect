import './App.css';
import Navbar from './components/Navbar.js'
import SectionRender from './components/SectionRender'
import React from 'react'


function App() {

    const [pageState, setPageState] = React.useState("investidores")
    const [infoState, setInfoState] = React.useState([])
    const [originalState, setOriginalState] = React.useState([])


    return (
        <main>
            <header className="App-header">
                <Navbar setPage={setPageState} setInfoState={setInfoState} />
            </header>
            <SectionRender page={pageState} infoState={infoState} setInfoState={setInfoState} originalState={originalState} setOriginalState={setOriginalState} />
        </main>
    );
}

export default App;
