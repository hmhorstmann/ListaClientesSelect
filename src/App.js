import './App.css';
import Navbar from './components/Navbar.js'
import SectionRender from './components/SectionRender'


function App() {

    return (
        <div className="App">
                <header className="App-header">
                    <Navbar />
                </header>
                <SectionRender />
        </div>
    );
}

export default App;
