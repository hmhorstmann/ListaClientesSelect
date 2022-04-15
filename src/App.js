import './App.css';
import Navbar from './components/Navbar.js'
import SectionRender from './components/SectionRender'
import React from 'react'


function App() {

    const [pageState, setPageState] = React.useState("home")
    const [infoState, setInfoState] = React.useState({
        infos: []
    })


    return (
        <main>
            <header className="App-header">
                <Navbar setPage={setPageState} setInfoState={setInfoState} />
            </header>
            <SectionRender page={pageState} infoState={infoState} setInfoState={setInfoState} />
        </main>
    );
}

export default App;
