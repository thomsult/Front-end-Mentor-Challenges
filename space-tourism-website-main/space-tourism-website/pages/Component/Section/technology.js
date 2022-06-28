import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Selector } from "../Selector/Selector";
import { useRouter } from "next/router";
import { useGetTechnology } from "../Utils/utils";
import { useWindowsState } from "../Utils/utils";
export default function TechnologySection() {
  const WindowsState = useWindowsState();
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
  const Technology = useGetTechnology();

  const changeRoute = (Target) => {
    router.replace(`/technology/${Target}`);
    SetRoute(Target);
  };
  useEffect(async () => {
    if (Technology) {
      try {
        const newRoute = window.location.pathname.split("/")[2];

        console.log(newRoute, Route);
        if (Technology.find((el) => el === newRoute) !== undefined) {
          SetRoute(newRoute);
          const res = await fetch(
            `http://localhost:3000/api/technology/${newRoute}`
          );
          const data = await res.json();
          setData(data);
          SetError(null);
        } else {
          throw "not found";
        }
      } catch (error) {
        SetError([router.query, error, Technology]);
      }
    }
  }, [Route, Technology]);

  if (Data && !Data.hasOwnProperty("error") && !Error) {
    return (
      <div className={styles.main}>
        <div>
          <h2 className={styles.mainTitles}>
            <b>03</b> SPACE LAUNCH 101
          </h2>
          </div>
          <section className={styles.TechSection}>
            <div>
          <img
            src={`/assets/technology/image-${lowerFirstLetter(
              Data.name
            )}-${WindowsState != "desktop"?"landscape":"portrait"}.jpg`}
            alt={Data.name + " Photo"}
            className={styles.TechImage}
          />
          </div>
        <div className={styles.Tech}>
          <Selector
            ListType="Technology"
            route={Data.name}
            onChange={(e) => changeRoute(e)}
          />
          
          <h3>
            THE TERMINOLOGY…
          </h3>
          <h1>{Data.name}</h1>
          <p>
            {Data.description}
          </p>
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
