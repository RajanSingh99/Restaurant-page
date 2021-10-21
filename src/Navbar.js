import cup from './images.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="heading">
            <h1><span>N</span>oodly<span>D</span>oodle</h1>
            <img src={cup} alt="" />
            </div>        
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        
      );
}
 
export default Navbar;