
export const FedeUp = (delay) =>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:delay,
            }
        }
    }
};
export const FedeLeft = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x:100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay,
            }
        }
    }
};
export const Federight = (delay) =>{
    return{
        hidden:{
            opacity:0,
            x: -100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay,
            }
        }
    }
};
// variants={Federight(0.6)}
// initial="hidden"
// animate="visible"