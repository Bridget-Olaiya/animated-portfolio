import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, upSpring, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia rem quod, ab dolor odit aperiam ullam illo quaerat omnis?",
    },
    {
        id: 2,
        title: "Next.js Commerce",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia rem quod, ab dolor odit aperiam ullam illo quaerat omnis?",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia rem quod, ab dolor odit aperiam ullam illo quaerat omnis?",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quia rem quod, ab dolor odit aperiam ullam illo quaerat omnis?",
    },
];


const Single = ({ item }) => {
    const ref = useRef();


    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const X = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>;
};
const Portfolio = () => {

    const ref = useRef();


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Features Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id} />
        ))}
    </div>;
};

export default Portfolio;