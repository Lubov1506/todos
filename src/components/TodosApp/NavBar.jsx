import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex gap-2 items-center justify-center">
          <NavLink to='/'>Home</NavLink>  
          <NavLink to='/todos'>TodoList</NavLink>  
        </nav>
    );
}

export default NavBar;
