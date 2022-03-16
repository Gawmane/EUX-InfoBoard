import axios from "axios";
import { useEffect, useState } from "react";
import style from "./FoodPlan.module.scss";
import foodplan from "../../../Assets/Data/FoodPlan.json";
import { MdFastfood } from "react-icons/md";

export const Menu = () => {
  //using json instead of api
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    //get today's dayname
    // let todaysDay = new Date().toLocaleString("default", { weekday: "long" });

    let menuarray = foodplan.Days;
    // // menuarray = menuarray.filter((menu) => {
    // //   return menu === todaysDay;
    // // });
    // console.log(todaysDay);
    // console.log(menuarray);
    // //foodplan imported from json

    setMenu(menuarray);
  }, []);
  const arrDayLocal = [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag",
  ];
  const date = new Date().getDay();
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
    <section className={style.foodplanWrapper}>
      {/* bruger icon som er installeret og importet først fra react icon */}

      {/* mapper resultat */}
      {menu &&
        menu.map((dish, index) => {
          return (
            arrDayLocal[date] === dish.DayName && (
              <>
                <h2>
                  Dagens ret <MdFastfood />
                </h2>
                {/* using replace to delete the price */}
                <p>{dish.Dish.replace("- kr. 28,00", "")}</p>
              </>
            )
          );
        })}
    </section>
  );
};
