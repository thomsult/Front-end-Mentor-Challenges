import data from "../data.json"


export default function handler(req, res) {
    const { root } = req.query
    function AddDash(string){
      return string.replace(/ /g, "-")
    }



    const property = Object.getOwnPropertyNames(req.query)[0]
if(property == "getCrewsNames"){
  res.status(200).json({CrewsNames:data.crew.map((el)=>AddDash(el.name))})
}else{
  res.status(200).json(data.crew)
}
}