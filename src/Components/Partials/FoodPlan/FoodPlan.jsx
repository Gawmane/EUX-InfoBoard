import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './FoodPlan.module.scss'
import foodplan from '../../../Assets/Data/FoodPlan.json'
import { MdFastfood } from "react-icons/md";

export const Menu = () => {

    //using json instead of api
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        //foodplan imported from json
        setMenu(foodplan.Days)
    })

    // //fetch api
    // useEffect(() => {
    //     const getData = async () => {
    //         const url = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json';
    //         const result = await axios.get(url);
    //         //console.log(result);
    //         setMenu(result.data.Days)
    //     }
    //     getData();
    // }, [setMenu])

    return (
        <section className={style.foodplanwrapper}>
            {/* bruger icon som er installeret og importet først fra react icon */}
            <h2>Ugens menu <MdFastfood/></h2>
            
            {/* mapper resultat */}
            {menu && menu.map((dish,index) => {
                return (
                    <section key={index} className={style.foodplansection}>
                        <h4>{dish.DayName}</h4>
                        <h4>{dish.Dish}</h4>
                    </section>
                )
            })}
        </section>
    )
}