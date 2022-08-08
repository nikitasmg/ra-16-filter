import './App.css';
import Portfolio from './components/portfolio/Portfolio'
import Store from './components/store/Store'
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

function App() {

    let activeStyle = {
        color: 'white',
        background: 'black',
    };

    return (
        <BrowserRouter>
            <nav className='navbar'>
                <NavLink
                    to="/"
                    className={'navbar__item'}
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Filter
                </NavLink>
                <NavLink
                    to="/layouts"
                    className={'navbar__item'}
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    layouts
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={< Portfolio/>}/>
                <Route path="/layouts" element={< Store/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
