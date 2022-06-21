import Image from "next/image";
import react from "react"
import { useState,useRef,useEffect } from "react"
import styles from './styles.module.css'
export default function NavBar(Props) {
  const [NavUnderLinks,setNavUnderLinks] = useState({width:"0px"})
  const ref = useRef(null);
  const [ChildNumSelect,setChildNumSelect] = useState(Props.select)
  const [mobileState,setMobileState] = useState(false)
const Li_item = ["Home","Destination","Crew","Technology"]



  useEffect(() => {
    if(window.innerWidth < 980){
      setMobileState(true)
    }else{
      setMobileState(false)
    }
    
    window.addEventListener('load',(()=>{
      console.log('start')
      display(ref)
    }))
    window.addEventListener('resize',(()=>{{
      if(window.innerWidth < 980){
        setMobileState(true)
        display(ref)
      }else{
        setMobileState(false)
        display(ref)
      }
    }}))
    
  }, []);



  function display(ref){
    if(ref !== null){


      setNavUnderLinks({
        width:mobileState?"5px":ref.current.children[ChildNumSelect].offsetWidth + "px",
        left:mobileState?"100%":ref.current.children[ChildNumSelect].offsetLeft+"px",
        top:mobileState?ref.current.children[ChildNumSelect].offsetTop+"px":"calc(5em - 2px)",
        height: mobileState?ref.current.children[ChildNumSelect].offsetHeight+"px":"3px"
        
      
      })
    }

    
  }

  return (<div className={styles.NavbarWarp}>
    <div className={styles.LogoNavbar}>
      
    <Image src={"/assets/shared/logo.svg"} width="35" height="35"/>


    </div>
    

  <nav className={styles.NavBar}>
  <div>
    
    </div>
  <div  className={styles.MenuWrap}>
    <input className={styles.MenuCheckbox} id="MenuCheckbox" type="checkbox" aria-label="Menu"></input>
    <label htmlFor="MenuCheckbox"  className={styles.Menu}
    onClick={()=>{display(ref)}}
    >
      <div></div>
      
    </label>
    
    <ul ref={ref}
    
    >
     {Li_item.map((el,index)=>{
      return <li key={index} className={styles.NavBarItems}>
        <a className={index == ChildNumSelect?styles.active:""} href="#"><span>{"0"+index}</span>{el}</a>
        </li>

     })}
    
    </ul>

    <div className={styles.NavUnderLinks}  style={NavUnderLinks}  ></div>
  </div>
  
</nav></div>
  )
}
