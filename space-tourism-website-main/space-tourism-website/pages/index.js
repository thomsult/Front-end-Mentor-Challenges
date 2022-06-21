
import Head from "next/head"
import NavBar from "./Component/NavBar/navBar"
import MainSection from "./Component/Section/main"
import { useState,useRef,useEffect } from "react"


export default function IndexPage() {
  const [WindowsState,setWindowsState] = useState("mobile")
  useEffect(() => {
    if(window.innerWidth < 980){
      setWindowsState("mobile")
    }else if(window.innerWidth > 980 && window.innerWidth < 1400){
      setWindowsState("tablet")
    }
    else{
      setWindowsState("desktop")
    }
    

    window.addEventListener('resize',(()=>{{
      if(window.innerWidth < 980){
        setWindowsState("mobile")
      }else if(window.innerWidth > 980 && window.innerWidth < 1400){
        setWindowsState("tablet")
      }
      else{
        setWindowsState("desktop")
      }
    }}))
  }, []);

    return (
    <div style={{
      backgroundImage: `url(/assets/home/background-home-${WindowsState}.jpg)`,
      width: "100vw",
      height: "100vh",
  
      backgroundPosition: "center bottom",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      
      }}>
    <div >
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png"></link>
      </Head>
      <NavBar select="0"/>
      <div>
        <MainSection/>
      </div>
    </div>
    </div>)
  }
  
