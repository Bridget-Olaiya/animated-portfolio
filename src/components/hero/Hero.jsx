import "./hero.scss"
import { motion } from "framer-motion";

const slidervariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        Transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero =()=>{
    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textCointainer" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>BRIDGET OLAIYA</motion.h2>
                    <motion.h1 variants={textvariants}>Web Developer and UI Designer </motion.h1>
                    <motion.div variants={textvariants} className="buttons" >
                        <motion.button variants={textvariants}>See the Latest Works</motion.button>
                        <motion.button variants={textvariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textvariants}  animate="scrollButton"src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={slidervariants} initial="initial" animate="animate">
                Scale Your Online Presence by 10x
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero