import { Link } from "react-router-dom";

const Navbar = ({ setToken }) => {

    const Logout=()=>{
        setToken("");
    }
    
    return (
        <div className="navbar">
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Create">Create</Link></li>

                <li><button onClick={Logout}>Logout</button></li>
            </ul>
            
        </div>
    );
}

export default Navbar;