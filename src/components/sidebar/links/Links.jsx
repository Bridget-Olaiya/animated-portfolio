import {motion} from "framer-motion";

const variants ={
  open:{
    transition:{
      staggereChildren:0.1,
    },
  },
  closed:{
    transition:{
      staggereChildren:0.05,
      staggereDirection: -1,
    },
  },
};

const itemvariants ={
  open:{
    y: 0,
    opacity: 1,
    },

  closed:{
    y: 50,
    opacity: 0,
  },
};

const Links = () => {

    const items = ["Homepage", "About", "Services", "Portfolio", "Contact"];

    return (
     <motion.div className="links" variants={variants}>
       {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            {item}
        </motion.a>
       ))}
     </motion.div>
    );
};

export default Links;