import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Selector } from "../Selector/Selector";
import { useRouter } from "next/router";
import { useGetCrews } from "../Utils/utils";

export default function CrewSection() {
  const [Data, setData] = useState(null);
  function lowerFirstLetter(string) {
    return string
      .split(" ")
      .map((N) => N.charAt(0).toLowerCase() + N.slice(1))
      .join("-");
  }
  const router = useRouter();
  const [Route, SetRoute] = useState(null);
  const [Error, SetError] = useState(null);
  const Crew = useGetCrews();

  const changeRoute = (Target) => {
    router.replace(`/crew/${Target}`);
    SetRoute(Target);
  };
  useEffect(async () => {
    if (Crew) {
      try {
        const newRoute = window.location.pathname.split("/")[2];

        console.log(newRoute, Route);
        if (Crew.find((el) => el === newRoute) !== undefined) {
          SetRoute(newRoute);
          const res = await fetch(`http://localhost:3000/api/crew/${newRoute}`);
          const data = await res.json();
          setData(data);
          SetError(null);
        } else {
          throw "not found";
        }
      } catch (error) {
        SetError([router.query, error, Crew]);
      }
    }
  }, [Route, Crew]);

  if (Data && !Data.hasOwnProperty("error") && !Error) {
    return (
      <div className={styles.main}>
        <div>
          <h2 className={styles.mainTitles}>
            <b>02</b> Meet your crew
          </h2>
        </div>
        <section className={styles.CrewSection}>
          <div>
            <img
              src={`/assets/crew/image-${lowerFirstLetter(Data.name)}.webp`}
              alt={Data.name + " Photo"}
              className={styles.CrewImage}
            />
            <div className={styles.CrewSeparator}></div>
          </div>
          <div className={styles.Crew}>
            <Selector
              ListType="Crews"
              route={Data.name}
              onChange={(e) => changeRoute(e)}
            />
            <h3>{Data.role}</h3>
            <h1>{Data.name}</h1>
            <p>{Data.bio}</p>
          </div>
        </section>
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
