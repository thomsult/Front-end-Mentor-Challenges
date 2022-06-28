import data from "../data.json"

export default function handler(req, res) {
    const { crew } = req.query
  function removeDash(string){
    return string.replace(/-/g, " ")
  }
    

    const IndexOfcrew = data.crew.findIndex((el)=>el.name == removeDash(crew))
    if(IndexOfcrew !== -1){
      res.status(200).json(data.crew[IndexOfcrew])
    }else{
      res.status(404).json({error:"Not Found"})
    }


   
  }
