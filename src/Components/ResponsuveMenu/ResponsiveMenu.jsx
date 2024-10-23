import { AnimatePresence,motion } from "framer-motion";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const navberMenu =[
    {
        id:1,
        title:"Home",
        path:"/"
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
const ResponsiveMenu = ({open}) => {
    return (
        <div>
            <AnimatePresence mode="wait">
                {
                    open && (
                        <motion.div
                        initial={{opacity:0, y:-100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:1, y:-100}}
                        transition={{duration:0.3}}
                         className="absolute left-0 w-full z-20 h-screen">
                            <div className="text-xl font-semibold uppercase bg-red-500 text-white py-10 m-6 rounded-3xl">
                                <ul className="flex flex-col items-center gap-10">
                                {
                                navberMenu.map((menu) =>(<li key={menu.id}><Link to={menu.path}>{menu.title}</Link></li>))
                                }
                                </ul> 
                            </div>
                        </motion.div>

                    )
                }

            </AnimatePresence>
            
        </div>
    );
};

export default ResponsiveMenu;

ResponsiveMenu.propTypes = {
    open:PropTypes.object
}