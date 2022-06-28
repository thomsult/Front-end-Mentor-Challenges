import Image from "next/image";
import Link from "next/link";
import react from "react"
import { useState,useRef,useEffect } from "react"
import styles from './styles.module.css'
export default function NavBar(Props) {
  const ref = useRef();
  const Li_item = ["home","destination","crew","technology"]
  const Select = Li_item.findIndex((el)=>el == Props.select)




  return (<div className={styles.NavbarWarp}>
    <div className={styles.LogoNavbar}>
      
    <Image src={"/assets/shared/logo.svg"} width="35" height="35"/>


    </div>
    

  <nav className={styles.NavBar}>

  <div  className={styles.MenuWrap}>
  
    <input className={styles.MenuCheckbox} id="MenuCheckbox" type="checkbox" aria-label="Menu"></input>
    <label htmlFor="MenuCheckbox"  className={styles.Menu}
    >
      <div></div>
     
    </label>
    
    <ul ref={ref}
    
    >
     {Li_item.map((el,index)=>{
      return <li key={index} className={styles.NavBarItems}>
        <a href={"/"+el} className={index == Select?styles.active:""} ><span>{"0"+index}</span>{el}</a>
        </li>

     })}
     <li className={styles.NavBarItemsInfo}>Pour un meilleur aperçu utiliser Chrome</li>
    </ul>
    
  </div>
  
</nav></div>
  )
}
