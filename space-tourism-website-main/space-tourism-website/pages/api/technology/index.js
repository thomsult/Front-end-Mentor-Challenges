import data from "../data.json"


export default function handler(req, res) {
    const { root } = req.query
    function AddDash(string){
      return string.replace(/ /g, "-")
    }



    const property = Object.getOwnPropertyNames(req.query)[0]
if(property == "getTechnologyNames"){
  res.status(200).json({technologyNames:data.technology.map((el)=>AddDash(el.name))})
}else{
  res.status(200).json(data.technology)
}
}