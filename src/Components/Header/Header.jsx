import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const handleClicked = () => {
        // console.log('clicked');
        
        
    }

    return (
        <div>
            
            <nav>
                <span>My Website: </span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                
                <button onClick={handleClicked} >Submit</button>
            </nav>
        </div>
    );
};

export default Header;