import React, { useState, useEffect } from "react";
import styles from "./Activities.module.scss";
//1st way
import Data from "./Activities.json";

export const Activites = () => {
  const [geuxactivities, setGeuxActivities] = useState([]);
  const [euxactivities, setEuxActivities] = useState([]);

  useEffect(() => {
    //setting the activity array. all activities are here together
    let activitiesArray = Data.value;
    //converting all activities in the +0 timezone
    //the browser knows, to add one hour to the dates
    //we are in +1 normally
    activitiesArray = activitiesArray.map((activity) => {
      activity.StartDate.replace("+01:00", "+00:00");
      return activity;
    });
    const now = new Date();
    //now.setHours(now.getHours() - 1);
    //now.setHours(6);
    //now.setMinutes(0);

    //filtering activities to show only future
    activitiesArray = activitiesArray.filter((activity) => {
      const date = new Date(activity.StartDate);
      return new Date(activity.StartDate) > now;
    });
    //console.log(activitiesArray);

    //sort all activites by StartDate ascending
    activitiesArray.sort((a, b) => {
      return new Date(a.StartDate) - new Date(b.StartDate);
    });

    //filtering activities to show only geux
    let geux = activitiesArray.filter((activity) => {
      return activity.Team.startsWith("geux");
    });

    //filtering activities to show only eux
    let eux = activitiesArray.filter((activity) => {
      return activity.Team.startsWith("eux");
    });

    //Activities imported from jsons
    setGeuxActivities(geux);
    setEuxActivities(eux);
    // console.log(Data.value);

    setInterval(() => {
      // Kalder getData inde i interval-funktionen
      setGeuxActivities(geux);
      setEuxActivities(eux);
    }, 600000);

    //Dependency array [] - render 1 gang og cleaner så
  }, []);

  // Returner en tabel med en række(tr) med overskrifter(th)
  return (
    <section className={styles.aktivitiesWrapper}>
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
                item.StartDate = item.StartDate;
                item.Subject = item.Subject.replace(", eux", "");
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
                item.Subject = item.Subject.replace(", eux", "");
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
