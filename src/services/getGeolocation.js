import axios from "axios";


export async function getLocation(latitude,longitude){
    try{
        const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en `)
        return response['data']
    }catch(error){
        console.log(error)

    }
}