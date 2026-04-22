import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/NavbarComponent';
import ShowListComponent from './components/ShowListComponent';
import ShowDetailsComponent from './components/ShowDetailsComponent';
import AddShowComponent from './components/AddShowComponent';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ShowListComponent />} />
                    <Route path="/shows" element={<ShowListComponent />} />
                    <Route path="/shows/:id" element={<ShowDetailsComponent />} />
                    <Route path="/shows/type/:type" element={<ShowListComponent />} />
                    <Route path="/add" element={<AddShowComponent />} />
                </Routes>
            </div>
        </Router>
    )
}
export default App;
