import data from "../data.json"


export default function handler(req, res) {
    const { root } = req.query
    const property = Object.getOwnPropertyNames(req.query)[0]
    console.log()
if(property == "getPlanetNames"){
  res.status(200).json({PlanetName:data.destinations.map((el)=>el.name)})
}else{
  res.status(200).json(data.destinations)
}
}