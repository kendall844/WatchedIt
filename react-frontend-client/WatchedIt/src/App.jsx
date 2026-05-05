import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavbarComponent";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import ShowListComponent from "./components/ShowListComponent";
import AddShowComponent from "./components/AddShowComponent";
import SearchComponent from "./components/SearchComponent";
import HomeComponent from "./components/HomeComponent";
import MyShowsComponent from "./components/MyShowsComponent";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/add" element={<AddShowComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupComponent />} />
                <Route path="/search" element={<SearchComponent />} />
                <Route path="/shows/type/:type" element={<ShowListComponent />} />
                <Route path="/my-shows" element={<MyShowsComponent />} />
            </Routes>
        </>
    );
}

export default App;