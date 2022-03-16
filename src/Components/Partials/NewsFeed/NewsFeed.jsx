import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../NewsFeed/NewsFeed.module.scss";

export const NewsFeed = () => {
  const [news, setNews] = useState([]);

  //  Bruger useffect hook til at render + laver url const og henter get funktion med axios
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder%23";
      const result = await axios.get(url);
      setNews(result.data.items);
      //  console.log(result)
    };
    getData();
    //Dependency array [] - render 1 gang og cleaner så
  }, [setNews]);

  return (
    <div className={styles.news}>
      {/* Marqee tag med en hastighed på 6 */}
      <marquee scrollamount="6">
        {/* mapper vores array(api) */}
        {news &&
          news.map((item, index) => {
            // I vores return laver vi en span med et key og herefter insætter data og bullet
            return (
              <span key={index}>
                {" "}
                {item.title} <span className={styles.bullet}> &bull;</span>{" "}
              </span>
            );
          })}
      </marquee>
    </div>
  );
};
