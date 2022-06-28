import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Selector } from "../Selector/Selector";
import { useRouter } from "next/router";
import { useGetPlanets } from "../Utils/utils";

export default function DestinationSection() {
  const [Data, setData] = useState(null);
  function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  const router = useRouter();
  const [Route, SetRoute] = useState(null);
  const [Error, SetError] = useState(null);
  const Planets = useGetPlanets();

  const changeRoute = (Target) => {
    router.replace(`/destination/${Target}`);
    SetRoute(Target);
  };

  useEffect(async () => {
    if (Planets) {
      try {
        const newRoute = window.location.pathname.split("/")[2];

        console.log(newRoute, Route);
        if (Planets.find((el) => el === newRoute) !== undefined) {
          SetRoute(newRoute);
          const res = await fetch(
            `http://localhost:3000/api/destination/${newRoute}`
          );
          const data = await res.json();
          setData(data);
          SetError(null);
        } else {
          throw "not found";
        }
      } catch (error) {
        SetError([router.query, error, Planets]);
      }
    }
  }, [Route, Planets]);

  //      SetRoute(routeNow)

  if (Data && !Data.hasOwnProperty("error") && !Error) {
    return (
      <div className={styles.main}>
        <div>
          <h2 className={styles.mainTitles}
          >
            <b>01</b> Pick your destination
          </h2>
          <section className={styles.DestSection}>
          <div>
          <img
            src={`/assets/destination/image-${lowerFirstLetter(
              Data.name
            )}.webp`}
            alt={Data.name + " Photo"}
            className={styles.DestImage}
          />
          </div>
          <div className={styles.Dest}>
          <Selector
            ListType="Planets"
            route={Data.name}
            onChange={(e) => changeRoute(e)}
          />

          <h1>{Data.name}</h1>
          <p>{Data.description}</p>

          <div className={styles.DestInfo}>
            <div>
              <h4>AVG. DISTANCE</h4>
              <p>{Data.distance}</p>
            </div>
            <div>
              <h4>Est. travel time</h4>
              <p>{Data.travel}</p>
            </div>
          </div>
         
        </div>
        </section>
      </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div>
          <h2>Error</h2>
          <p>Not Found</p>
        </div>
      </div>
    );
  }
}
