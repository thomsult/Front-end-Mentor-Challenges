import React,{useState,useEffect} from 'react'




function useGetTechnology (){
  const [Data,setData] = useState(null)

  useEffect(async () => {
      const response = await fetch('http://localhost:3000/api/technology?getTechnologyNames')
      const data = await response.json();
  
      if(data.technologyNames){
          setData(data.technologyNames)
      }
      
  
  }, [])
  return Data

}






function useGetCrews (){
    const [Data,setData] = useState(null)

    useEffect(async () => {
        const response = await fetch('http://localhost:3000/api/crew?getCrewsNames')
        const data = await response.json();
    
        if(data.CrewsNames){
            setData(data.CrewsNames)
        }
        
    
    }, [])
    return Data

}



function useGetPlanets(){
    const [Data,setData] = useState(null)

    useEffect(async () => {
        const response = await fetch('http://localhost:3000/api/destination?getPlanetNames')
        const data = await response.json();
    
        if(data.PlanetName){
            setData(data.PlanetName)
        }
        
    
    }, [])
    return Data

}

function useWindowsState() {
    const [WindowsState,setWindowsState] = useState("mobile")
    useEffect(() => {
        if(window.innerWidth < 980){
          setWindowsState("mobile")
        }else if(window.innerWidth > 980 && window.innerWidth < 1200){
          setWindowsState("tablet")
        }
        else{
          setWindowsState("desktop")
        }
        
    
        window.addEventListener('resize',(()=>{{
          if(window.innerWidth < 980){
            setWindowsState("mobile")
          }else if(window.innerWidth > 980 && window.innerWidth < 1200){
            setWindowsState("tablet")
          }
          else{
            setWindowsState("desktop")
          }
        }}))
      }, []);
      return WindowsState
}
export {useWindowsState,useGetPlanets,useGetCrews,useGetTechnology}