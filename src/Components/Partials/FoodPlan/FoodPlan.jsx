import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './FoodPlan.module.scss'

export const Menu = () => {
    const [menu, setMenu] = useState([]);
    
    //fetch api
    useEffect(() => {
        const getData = async () => {
            const url = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json';
            const result = await axios.get(url);
            console.log(result);
            setMenu(result.data.Days)
        }
        getData();
    }, [setMenu])

    return (
        <>
            <h2>Ugens menu </h2>
            
            {/* mapping the result */}
            {menu && menu.map(dish => {
                return (
                    <section key={dish.id} >
                        <h4 className={style.day}>{dish.DayName}</h4>
                        <h4>{dish.Dish}</h4>
                        
                    </section>
                )
            })}
        </>
    )
}