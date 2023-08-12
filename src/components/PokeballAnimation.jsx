import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import "./PokeballAnimation.scss";

const PokeballAnimation = () => {
    return (
        <motion.div
            className="pokeball-container"
            animate={{
                rotate: [0, 720, 1840],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: easeIn }}
        >
            <motion.div
                className="pokeball-half top"
                animate={{ top: ["0px", "-10px", "0px"], }}
                transition={{ repeat: Infinity, duration: 2, ease: easeIn }}
            >
                <motion.div className="pokeball-half-center center-top"
                       animate={{ height: [12, 18, 12], width: [12, 18, 12], bottom: ["-6px", "-9px", "-6px"], left: [18] }}
                transition={{ repeat: Infinity, duration: 2, ease: easeIn }}
                />
            </motion.div>
            <div
                className="pokeball-center"
         
            />
            <motion.div
                className="pokeball-half bottom"
                animate={{ bottom: ["0px", "-10px", "0px"], }}
                transition={{ repeat: Infinity, duration: 2, ease: easeIn }}
            >
                <motion.div
                    className="pokeball-half-center center-bottom"
                    animate={{ height: [12, 18, 12], width: [12, 18, 12], top: ["-6px", "-9px", "-6px"], left: [18] }}
                    transition={{ repeat: Infinity, duration: 2, ease: easeIn }} 
                    />
            </motion.div>
        </motion.div>
    )
}

export default PokeballAnimation