import axios from "axios";

const getData = async ()=>{
    try{
        const response = await axios.get(`https://react-fast-pizza-api.onrender.com/api/menu`);
        return response.data["data"];
        
    }catch(error){
       
        console.log(error)
    }
}
export default getData;