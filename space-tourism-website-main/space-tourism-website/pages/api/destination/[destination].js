import data from "../data.json"

export default function handler(req, res) {
    const { destination } = req.query
    
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const IndexOfDestination = data.destinations.findIndex((el)=>el.name == capitalizeFirstLetter(destination))
    if(IndexOfDestination !== -1){
      res.status(200).json(data.destinations[IndexOfDestination])
    }else{
      res.status(404).json({error:"Not Found"})
    }


   
  }
