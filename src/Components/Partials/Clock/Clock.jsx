import React, { useState, useEffect } from "react"
import Style from "./Clock.module.scss"

// Laver en funktion til uret
export const ClockFunc = () => {
    // Laver en dateState med et useState hook
    const [ DateState, setDateState ] = useState(new Date())
    // Tilføjer useEffect således at man kan sætte et interval og så uret opdaterer sig selv.
    useEffect (() => {
        // Opdaterer nu uret hvert 30 sekund.
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    // Her returneres ClockFunc
    return (
        // Tilføjer class og styling dertil på div.
        <div className={Style.clock}>
            
            <p>
                {'  '}
                {/* Tilføjer dato med dag, måned og år, og fortæller hvordan de skrives.
                da-DK gør så månederne vil blive skrevet på dansk */}
                {DateState.toLocaleDateString('da-DK', {
                    day: 'numeric', // dag skrives i tal.
                    month: 'long', // long skrive måneden i dens helhed.
                    year: 'numeric' // år skrives i tal.
                })}
            </p>
            <p className={Style.timeInd}>
                {/* Bruger toLocaleString metoden for at kunne ændre på tidspunkt. 
                Uret vises som et engelsk ur, da det er et 24-timers ur. */}
                {DateState.toLocaleString('en-GB', {
                    // Tilføjer time og minut til klokken, og fortæller de har numerisk værdi.
                    hour: 'numeric', // Timer skrives i tal.
                    minute: 'numeric' // Minutter skrives i tal.
                })}
            </p>
        </div>
    )
}