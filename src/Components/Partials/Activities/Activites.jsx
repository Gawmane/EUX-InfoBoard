import React, {useState, useEffect} from "react";

import styles from './Activities.module.scss'
//1st way
import Data from "./Activities.json";


export const Activites = () => {

  const [activities, setActivities] = useState([]);
 
  
    useEffect(()=>{

        //foodplan imported from json
        if(Data.value.Subject == ""){
          return 'i værksted';
        }
        setActivities(Data.value)
        
        
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
      {activities && activities.map((item, index ) => {
        
        
        //   Returner en række med vores kl,fag,uddanelse,holdnummer og lokale
        return(
          
          <tr key={index} >
                <td>KLOKKEN</td>
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