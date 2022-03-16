import axios from "axios";
import { useEffect, useState } from "react";
import style from './BusPlan.module.scss'
import { BiBus, BiRun } from 'react-icons/bi';

export const BusPlan = () => {
    const [busplan, setBusPlan] = useState([]);

    //fetch
    useEffect(()=> {
        const getData = async () => {
            const url = 'https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1';
            const result = await axios.get(url);
            //console.log(result.data.MultiDepartureBoard.Departure.slice(0, 5));
            setBusPlan(result.data.MultiDepartureBoard.Departure.slice(0, 3))
         
        }
        getData();
        
    }, 5000 [setBusPlan])

    return (
        <section className={style.busplanwrapper}>
        {/* bruger ikon som er installeret og importet fra react icon */}
        <h2>Busplan  <BiRun/> <BiBus/></h2>
        {/* mapper resultaten */}
        {busplan.map((plan,index) => {
            return (
                <section key={index} className={style.busplansection}>
                    <p>{plan.line}</p>
                    <p>{plan.direction}</p>
                    <p className={style.timer}>{plan.time}</p>
                </section>
            )
        })}
        </section>
    )
}