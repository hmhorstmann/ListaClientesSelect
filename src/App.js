import './App.css';
import Navbar from './components/Navbar.js'
import SectionRender from './components/SectionRender'
import React from 'react'


function App() {

    const [pageState, setPageState] = React.useState("investidores")

    return (
        <main>
            <header className="App-header">
                <Navbar setPage={setPageState} />
            </header>
            <SectionRender page={pageState} />
        </main>
    );
}

export default App;
