import React, {useState, useEffect} from "react";
import { customSort } from "../../../Assets/Helpers/Helpers";
import styles from './Activities.module.scss'
//1st way
import Data from "./Activities.json";

export const Activites = () => {
  
  const [activities, setActivities] = useState([]);
  
    useEffect(()=>{
        let activitiesArray = Data.value;
        console.log(activitiesArray);
        //..................... sort all activites by StartDate ascending
        activitiesArray.sort((a,b)=> {
          return new Date(a.StartDate) - new Date(b.StartDate);
        })
        // const today = new Date();
        // // set date manually for testing
        // today.setDate(9)
        // today.setHours(6,0)
        //  //filter all past activities 
        // activitiesArray = activitiesArray.filter((activity) => {
        //   return new Date(activity.StartDate) > today;
        // })

        //Activities imported from jsons
        setActivities(activitiesArray)
        // console.log(Data.value);
        
        //Dependency array [] - render 1 gang og cleaner så 
      }, []);
      
      // Returner en tabel med en række(tr) med overskrifter(th)
      return (
        <>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Kl.</th>
            <th>Fag</th>
            <th>Udannelse</th>
            <th>Hold</th>
            <th>Lokale</th>
          </tr>

        {/* Laver map hvor vi henter vores aktivites data */}
        {activities && activities.map((item, index) => {
        item.StartDate = item.StartDate.replace("+01:00", "+00:00");
            // Sætter tidsformat til time:minut på property item.Time
        item.Time = new Date(item.StartDate).toLocaleTimeString(
          'en-GB', {
          hour: '2-digit',
          minute: '2-digit'
        })
        //   Returner en række med vores kl,fag,uddanelse,holdnummer og lokale
        return(
          <tr key={index} >
              <td>{item.Time}</td>
               <td>{item.Subject ? item.Subject : "?"}</td>
               <td>{item.Education}</td>
               <td>{item.Team}</td>
               <td>{item.Room ? item.Room : "I værksted"}</td>
            </tr> 
          )
        })}
          </tbody>
        </table>
     </>   
   
   )
  }