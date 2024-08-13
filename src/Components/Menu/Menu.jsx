import apple from"../../assets/apple.png"
import orangr from"../../assets/orange.png"
import avacado from"../../assets/avacado.png"
import charee from"../../assets/charee.png"
import { motion } from "framer-motion"
import { FedeLeft } from "../../Utility/Animation"

const menuData =[
    {
        id:1,
        name:"Fresh Red Apples",
        price:"$3.99",
        image: apple,
        delay:0.3
    },
    {
        id:2,
        name:"Fresh Oranges",
        price:"$4.99",
        image: orangr,
        delay:0.6
    },
    {
        id:3,
        name:"Fresh Avocado",
        price:"$5.99",
        image: avacado,
        delay:0.9
    },
    {
        id:4,
        name:"Fresh Cherries",
        price:"$2.99",
        image:charee,
        delay:1.2
    },
]
const Menu = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
            <motion.h1
             initial={{opacity:0, x:-200}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:1, delay:0.3}}
             className="text-4xl font-bold pb-6 uppercase font-mono">Our Menu</motion.h1>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                   menuData.map((data) => (
                   <motion.div
                   variants={FedeLeft(data.delay)}
                   initial="hidden"
                   whileInView={"visible"}
                   whileHover={{scale:1.1}}
                    key={data.id} className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex justify-around items-center">
                    <img src={data.image} alt="" className="w-[60px] mb-4 scale-125 transform -translate-y-6"/>
                    <div className=" space-y-2">
                        <h1 className="text-xl font-bold">{data.name}</h1>
                        <p className="text-lg font-semibold text-yellow-600">{data.price}</p>
                    </div>

                    </motion.div>
                   ))
                }
            </div>
            
        </div>
    );
};

export default Menu;