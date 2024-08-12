import { TbShoppingBag } from "react-icons/tb";
import bannerimg from"../../assets/fruit-platter-featured-removebg-preview.png"
import { motion } from "framer-motion";
import { Federight } from "../../Utility/Animation";
import { FedeLeft } from "../../Utility/Animation";
const Hero = () => {
    return (
        <section className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col-reverse md:flex-row items-center py-8 md:py-12 gap-12 md:gap-2">
                {/* information */}
                <div className="space-y-6 md:w-1/2 w-full">
                       <motion.h1
                       variants={Federight(0.6)}
                       initial="hidden"
                       animate="visible"
                        className="text-4xl md:text-6xl font-bold font-serif">Healthy</motion.h1>
                       <motion.h1 
                       variants={Federight(0.6)}
                       initial="hidden"
                       animate="visible"
                       className="text-4xl md:text-6xl font-bold font-serif">Fresh <span className="text-orange-500">Fruits!</span></motion.h1>
                       <motion.p 
                       variants={Federight(0.9)}
                       initial="hidden"
                       animate="visible"
                       className="text-2xl font-serif">Order Now For Fresh Healthy Life</motion.p>
                       <motion.p 
                       variants={Federight(1.2)}
                       initial="hidden"
                       animate="visible"
                       className="text-gray-500 w-full md:max-w-[400px]">Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order</motion.p>
                       <motion.button 
                       variants={Federight(1.5)}
                       initial="hidden"
                       animate="visible"
                       className="bg-[#DC143C] text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#DC143C] hover:!scale-110 duration-300 flex items-center gap-2"><TbShoppingBag/> Order Now</motion.button>

                </div>
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <motion.img
                    variants={FedeLeft(0.6)}
                    initial={{opacity: 0, x:200, rotate:75}}
                    animate={{opacity: 1, x:0, rotate:0}}
                    transition={{duration:0.5,delay:0.5}}
                     src={bannerimg} alt=""/>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;