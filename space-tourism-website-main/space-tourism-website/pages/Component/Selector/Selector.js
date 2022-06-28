import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useGetPlanets,useGetCrews,useGetTechnology} from "../Utils/utils";


export function Selector(props){
const Select = {
  Data: null,
  StyleType:null,
  property:{
    Name:false,
    Titles:false
  }

}

if(props.ListType == "Planets"){
  Select.Data = useGetPlanets();
  Select.StyleType = styles.PlanetList
  Select.property.Name = true
  Select.property.Titles = false
  Select.property.Number = false
}
else if(props.ListType == "Crews"){
  Select.Data = useGetCrews();
  Select.StyleType = styles.CrewsList
  Select.property.Name = false
  Select.property.Titles = true
  Select.property.Number = false

}else if(props.ListType == "Technology"){
  Select.Data = useGetTechnology();
  Select.StyleType = styles.TechnologyList
  Select.property.Name = false
  Select.property.Titles = true
  Select.property.Number = true

}




  return (
    <div className={Select.StyleType}>
      <ul>
        {Select.Data &&
          Select.Data.map((el, index) => (
            <li
              className={props.route == el.replace(/-/g, " ") ? styles.active : ""}
              key={index}
              onClick={(e) => props.onChange(el)}
              title={Select.property.Titles?el:""}
            >
              {Select.property.Name?el:Select.property.Number?index+1:""}
            </li>
          ))}
      </ul>
    </div>
  );
}