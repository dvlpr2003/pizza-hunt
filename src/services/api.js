import axios from "axios";
import { json } from "react-router-dom";
const getData = async ()=>{
    try{
        const response = await axios.get(`https://react-fast-pizza-api.onrender.com/api/menu`);
        return json(response.data["data"]);
        
    }catch(error){
       
        console.log(error)
    }
}
export default getData;