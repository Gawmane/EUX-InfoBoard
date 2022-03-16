import React, { useState, useEffect } from "react";
import { customSort } from "../../../Assets/Helpers/Helpers";
import styles from "./Activities.module.scss";
//1st way
import Data from "./Activities.json";

export const Activites = () => {
  const [geuxactivities, setGeuxActivities] = useState([]);
  const [euxactivities, setEuxActivities] = useState([]);

  useEffect(() => {
    //setting the activity array. all activities are here together
    let activitiesArray = Data.value;

    //filtering activities to show only geux
    let geux = activitiesArray.filter((activity) => {
      return activity.Team.startsWith("geux");
    });

    //filtering activities to show only eux
    let eux = activitiesArray.filter((activity) => {
      return activity.Team.startsWith("eux");
    });

    // sort all activites by StartDate ascending
    activitiesArray.sort((a, b) => {
      return new Date(a.StartDate) - new Date(b.StartDate);
    });

    // const today = new Date();
    // //........................ set date manually for testing
    // today.setDate(9)
    // today.setHours(6,0)
    //  //.........................filter all past activities

    //Activities imported from jsons
    setGeuxActivities(geux);
    setEuxActivities(eux);
    // console.log(Data.value);

    //Dependency array [] - render 1 gang og cleaner så
  }, []);

  // Returner en tabel med en række(tr) med overskrifter(th)
  return (
    <section className={styles.aktivitieswrapper}>
      <section>
        <h2>Grundforløb</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Kl.</th>
              <th>Fag</th>
              <th>Hold</th>
              <th>Lokale</th>
            </tr>
          </thead>
          <tbody>
            {/* Laver map hvor vi henter vores aktiviter data */}
            {geuxactivities &&
              geuxactivities.map((item, index) => {
                item.StartDate = item.StartDate.replace("+01:00", "+00:00");
                // Sætter tidsformat til time:minut på property item.Time
                item.Time = new Date(item.StartDate).toLocaleTimeString(
                  "en-GB",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                );
                //   Returner en række med vores kl,fag,uddanelse,holdnummer og lokale
                return (
                  <tr key={index}>
                    <td>{item.Time}</td>
                    <td>{item.Subject ? item.Subject : "?"}</td>
                    <td>{item.Team}</td>
                    <td>{item.Room ? item.Room : "I værksted"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Hovedforløb</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Kl.</th>
              <th>Fag</th>
              <th>Hold</th>
              <th>Lokale</th>
            </tr>
          </thead>
          <tbody>
            {/* Laver map hvor vi henter vores aktiviter data */}
            {euxactivities &&
              euxactivities.map((item, index) => {
                item.StartDate = item.StartDate.replace("+01:00", "+00:00");
                // Sætter tidsformat til time:minut på property item.Time
                item.Time = new Date(item.StartDate).toLocaleTimeString(
                  "en-GB",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                );
                //   Returner en række med vores kl,fag,uddanelse,holdnummer og lokale
                return (
                  <tr key={index}>
                    <td>{item.Time}</td>
                    <td>{item.Subject ? item.Subject : "?"}</td>
                    <td>{item.Team}</td>
                    <td>{item.Room ? item.Room : "I værksted"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </section>
  );
};
