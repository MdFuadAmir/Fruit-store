import { LuLeafyGreen } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import ResponsiveMenu from "../Components/ResponsuveMenu/ResponsiveMenu";
const navberMenu =[
    {
        id:1,
        title:"Home",
        path:"/home"
    },
    {
        id:2,
        title:"Products",
        path:"/product"
    },
    {
        id:3,
        title:"About",
        path:"/about"
    },
    {
        id:4,
        title:"Shop",
        path:"/shop"
    },
    {
        id:5,
        title:"Contact",
        path:"/contact"
    },
]
const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="p-4 flex justify-between items-center max-w-6xl mx-auto">
            {/* logo */}
            <div className="flex gap-2 items-center text-2xl font-bold">
                <p className="text-[#DC143C]">FRUIT</p>
                <p className="text-orange-500">STORE</p>
                <LuLeafyGreen color="green"/>
            </div>
            {/* menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6">
                    {
                        navberMenu.map((menu) =>(<li key={menu.id}><Link to={menu.path} className="hover:text-red-500 hover:border-b border-red-500 duration-300 font-bold">{menu.title}</Link></li>))
                    }
                <button className="rounded-full p-3 hover:bg-red-500 hover:text-white duration-300">
                    <FaCartShopping/>
                </button>
                </ul>
            </div>
            {/* mobile navber*/}
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                <AiOutlineMenu className="text-xl"/>
            </div>
        </div>
        <ResponsiveMenu open={open}/>
        </>
    );
};

export default Header;