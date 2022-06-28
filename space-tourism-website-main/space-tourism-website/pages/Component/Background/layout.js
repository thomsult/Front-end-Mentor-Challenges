import React from 'react'
import { Children } from 'react/cjs/react.production.min'

import Head from "next/head"
import NavBar from '../NavBar/navBar'
import { useWindowsState } from '../Utils/utils'
export default function Layout(props) {
  const WindowsState = useWindowsState();
  return (
    <div style={{
        backgroundImage: `url(/assets/${props.Destination}/background-${props.Destination}-${WindowsState}.jpg)`,
        minHeight: "100vh",
       overflow: 'hidden',
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
      <NavBar select={props.Destination}/>
      <div>
      {props.children}
      </div>
    </div>
    <div style={{
      
  display: "fixed",
  width: "100%",
  position: "absolute",
  zIndex: 100,
  fontSize: "12px",
  textAlign: "center",
  bottom: 0,
  color: "white",
  fontFamily: "sans-serif"








    }}>
    Challenge by <a style={{
      textDecoration: 'none',
      color: "gray",
      fontFamily: "sans-serif"

    }}href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a style={{
      textDecoration: 'none',
      color: "gray",
      fontFamily: "sans-serif"

    }}href="https://github.com/thomsult">Thomsult</a>.
  </div>
    </div>
  )
}
