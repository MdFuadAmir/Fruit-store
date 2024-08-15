import { motion } from "framer-motion";
import { FedeUp } from "../Utility/Animation";
import bannerpng from"../assets/images.jpeg"
import { TbShoppingBag } from "react-icons/tb";


const Banner3 = () => {
    return (
        <section className="my-12">
            <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6 rounded-xl text-white" style={{backgroundImage:`url(${bannerpng})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
                {/* blank div */}
                <div></div>
                {/* banner info*/}
                <div className="space-y-6">
                    <motion.h1 
                    variants={FedeUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                    className="text-4xl md:text-6xl font-bold uppercase">
Get Fresh Fruits Today</motion.h1>
                    <motion.p
                    variants={FedeUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                     className="w-full md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
                    <motion.p 
                    variants={FedeUp(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                    className="w-full md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
                    <motion.button 
                       variants={FedeUp(1.5)}
                       initial="hidden"
                       animate="visible"
                       className="bg-[#DC143C] text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#DC143C] hover:!scale-110 duration-300 flex items-center gap-2"><TbShoppingBag/>Order Now</motion.button>
                </div>
            </div>
            
        </section>
    );
};

export default Banner3;