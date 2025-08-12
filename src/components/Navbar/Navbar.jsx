import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
      const routes = [
  
  { id: 1, name: 'Home', path:'/'},
  { id: 2, name: 'About', path:'about'},
  { id: 3, name: 'Services', path:'services'},
  { id: 4, name: 'Contact', path:'contact'},
  { id: 5, name: 'NotFound', path:'*'},
      ]
    const [open, setOpen] = useState(false)  
      return (
            
            <nav className="w-11/12 mx-auto text-black bg-orange-300 px-4">
                  <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                  {
                        open === true ? <RiCloseLargeFill></RiCloseLargeFill> : <CiMenuBurger></CiMenuBurger>
                  }
                  </div>
                  
                <ul className={`md:flex duration-1000 absolute  md:static ${
                  open ? 'top-10' : '-top-60'
                } bg-orange-300 p-6`} >
                   {
                 routes.map(rout  => <Link key={rout.id} rout={rout}></Link>)
                 }
                </ul>
            </nav>
      );
};

export default Navbar;