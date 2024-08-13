import banner from"../../assets/fruits-splash-BeZYLA1d.png"
import { FedeUp } from "../../Utility/Animation";
import { motion } from "framer-motion";
const Banner = () => {
    return (
        <section className="my-12 bg-orange-300/30">
            <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="flex justify-center">
                    <motion.img
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{type:"spring", stiffness:100, delay:0.2}}
                    viewport={{once:true}}
                     src={banner} alt="" className="h-[400px]"/>
                </div>
                {/* banner info*/}
                <div className="space-y-6">
                    <motion.h1 
                    variants={FedeUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{once:true}}
                    className="text-4xl md:text-6xl font-bold uppercase">brand info</motion.h1>
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
                       className="bg-[#DC143C] text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#DC143C] hover:!scale-110 duration-300">Learn More</motion.button>
                </div>
            </div>
            
        </section>
    );
};

export default Banner;