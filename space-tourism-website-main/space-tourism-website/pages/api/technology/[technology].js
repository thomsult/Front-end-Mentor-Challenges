import data from "../data.json"

export default function handler(req, res) {
    const { technology } = req.query
  function removeDash(string){
    return string.replace(/-/g, " ")
  }
    

    const IndexOftechnology = data.technology.findIndex((el)=>el.name == removeDash(technology))
    if(IndexOftechnology !== -1){
      res.status(200).json(data.technology[IndexOftechnology])
    }else{
      res.status(404).json({error:"Not Found"})
    }


   
  }
