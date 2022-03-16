import axios from "axios";
import { useEffect, useState } from "react";
import style from './BusPlan.module.scss'
import { BiBus, BiRun } from 'react-icons/bi';

export const BusPlan = () => {
    const [busPlan, setBusPlan] = useState([]);

    // useEffect hook som bruges til at fetch'e API-data. Det skal gøres Asynkront så den kan kaldes når-som-helst
    useEffect(() => {
        // laver en const som kalder API asynkront via anonoym arrowfunction
        const getData = async () => {
            // Variabel med API url
            const url = 'https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1';
            // Variabel med resultatet fra API kald via axios.get metode.
            const result = await axios.get(url);
            // Kalder useState hook med setBusPlan og udskriver resultat, som slices til at vise 3 resultater
            setBusPlan(result.data.MultiDepartureBoard.Departure.slice(0, 3))
         
        }
        // Kalder getData funktionen
        getData();

        // setInterval bruges til at gentage koden hvert 5000ms (5. sekund) for at vise nyligste bustid
        // Skal (åbentbart) skrives INDE i useEffect hooket og kalde den funktion som trækker på dataen - i dette tilfælde getData();
        setInterval(() => {
            // Kalder getData inde i interval-funktionen
            getData();
        }, 5000)
        // Dependency array viser setBusPlan
    }, [setBusPlan])

    // Returnerer react-html-ting-ting
    return (
        //Laver sektion med class og tilkobler style
        <section className={style.busPlanWrapper}>
        {/* bruger ikon som er installeret og importet fra react icon */}
        <h2>Busplan  <BiRun/> <BiBus/></h2>
        {/* mapper resultaten */}
        {busPlan.map((plan,index) => {
            return (
                <section key={index} className={style.busPlanSection}>
                    <p>{plan.line}</p>
                    <p>{plan.direction}</p>
                    <p className={style.timer}>{plan.time}</p>
                </section>
            )
        })}
        </section>
    )

}