import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import "./PokemonDisplay.scss"

const PokemonDisplay = ({ pokemonList }) => {
    return (
        <section className="pokemon-display">
            <div className="pokemon-container">
                {pokemonList.map((pokemon, i) => {
                    const { name, sprites } = pokemon
                    return (
                        <motion.div className="pokemon-card-container"
                            whileHover={{
                                rotate: [5, -5, 5, -5, 0],
                                scale: 1.05,
                                boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.411)",
                                transition: { duration: .3, ease: "linear"},
                            }}
                            key={i}
                        >
                            <div className="image-container">
                                <img src={sprites.front_default
                                } alt={`${name} sprite`} />
                            </div>
                            <div className="pokemon-card-center" />
                            <div className="name-container">
                                <h4>{name}</h4>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default PokemonDisplay;